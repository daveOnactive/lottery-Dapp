import Web3 from 'web3';
import { useEffect, useCallback } from 'react';
import { Actions, ActionTypes } from '../providers/app-provider';

declare global {
  interface Window {
    web3: any;
    ethereum: any;
    cleanEthereum: any,
  }
}

let web3: any;

export const useWeb3Client = ({ dispatch }: { dispatch: React.Dispatch<Actions> }) => {
  const provider = window.ethereum;

  const getBalance = useCallback(async (address: string) => {
    const balance = await web3?.eth?.getBalance(address);

    dispatch({
      type: ActionTypes.SET_BALANCE,
      payload: balance
    })
  }, [dispatch])

  const connectWallet = useCallback(() => {

    if (typeof provider !== 'undefined') {
      provider.request({ method: 'eth_requestAccounts' }).then((accounts: string[]) => {
        dispatch({
          type: ActionTypes.CONNECT_WALLET
        });

        dispatch({
          type: ActionTypes.SET_ADDRESS,
          payload: accounts[0]
        });

        web3 = new Web3(provider);

        getBalance(accounts[0]);

      }).catch((e: any) => e);
    }
  }, [dispatch, getBalance, provider]);


  useEffect(() => {
    if (typeof provider !== 'undefined') {
      window.ethereum.on('accountsChanged', (account: string[]) => {
        if (account.length) {
          dispatch({
            type: ActionTypes.SET_ADDRESS,
            payload: account[0]
          })

          getBalance(account[0])
        } else {
          dispatch({
            type: ActionTypes.DISCONNECT_WALLET
          });
        }
      })

      window.ethereum.on('disconnect', () => {
        dispatch({
          type: ActionTypes.DISCONNECT_WALLET
        });
      });
    }
  }, [dispatch, getBalance, provider]);


  useEffect(() => {
    let currentAccount: string = '';
    let isWalletConnected: boolean = false;
    if (typeof provider !== 'undefined') {
      setTimeout(() => {
        isWalletConnected = provider._state?.accounts.length;
        currentAccount = provider._state?.accounts[0];
        if (isWalletConnected) {
          dispatch({
            type: ActionTypes.CONNECT_WALLET
          });

          dispatch({
            type: ActionTypes.SET_ADDRESS,
            payload: currentAccount
          });

          web3 = new Web3(provider);

          getBalance(currentAccount);
        } else {
          dispatch({
            type: ActionTypes.DISCONNECT_WALLET
          });
        }
      }, 1500);
    }
  }, [dispatch, getBalance, provider]);

  return {
    connectWallet,
  }
}