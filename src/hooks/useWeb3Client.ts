import Web3 from 'web3';
import { useEffect, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

import { Actions, ActionTypes } from '../providers/app-provider';
import contractAbi from '../contract/CryptoPool.json';

declare global {
  interface Window {
    web3: any;
    ethereum: any;
    cleanEthereum: any,
  }
}

let web3: any;
let contract: any;
let currentAddress: string;
let convertedBalance: string;
let contractOwnerAddress: string;

const DEFAULT_BALANCE = '0';
const DEFAULT_PLAY_LOTTERY_VOLUME = '0.01';

export const useWeb3Client = ({ dispatch }: { dispatch: React.Dispatch<Actions> }) => {
  const provider = window.ethereum;

  const toast = useToast()

  const getBalance = useCallback(async (address: string) => {
    currentAddress = address;

    const balance = await web3?.eth?.getBalance(address);

    convertedBalance = await web3?.utils?.fromWei(balance, 'ether');

    dispatch({
      type: ActionTypes.SET_BALANCE,
      payload: convertedBalance
    });
  }, [dispatch]);

  const getContractOwner = useCallback(async () => {
    contractOwnerAddress = await contract.methods.contractOwner().call();

    if (contractOwnerAddress === currentAddress) {
      dispatch({
        type: ActionTypes.SET_ADMIN,
      });
    }
    dispatch({
      type: ActionTypes.SET_CONTRACT_OWNER,
      payload: contractOwnerAddress
    });
  }, [dispatch]);

  const playLottery = async () => {
    if (convertedBalance === DEFAULT_BALANCE) {
      toast({
        title: 'Insufficient Balance.',
        description: "Please fund your wallet and try again.",
        status: 'warning',
        duration: 5000,
        position: 'top',
        isClosable: true,
      })
    } else {
      try {
        dispatch({
          type: ActionTypes.SEND_TRANSACTION_IN_PROGRESS,
        });

        await web3?.eth?.sendTransaction({
          from: currentAddress,
          to: contractOwnerAddress,
          value: web3.utils.toWei(DEFAULT_PLAY_LOTTERY_VOLUME, 'ether'),
        });

        await getBalance(currentAddress);

        toast({
          title: 'Lottery Played!',
          description: `you have successfully Deposited ${DEFAULT_PLAY_LOTTERY_VOLUME}ETH`,
          status: 'success',
          duration: 5000,
          position: 'top',
          isClosable: true,
        });
      } catch {
        toast({
          title: 'Lottery Error!',
          description: `unable to play lotter please try again.`,
          status: 'error',
          duration: 5000,
          position: 'top',
          isClosable: true,
        })
      } finally {
        dispatch({
          type: ActionTypes.SEND_TRANSACTION_DONE,
        });
      }
    }
  }

  const connectWallet = useCallback(async () => {

    if (typeof provider !== 'undefined') {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });

      web3 = new Web3(provider);

      getBalance(accounts[0]);

      const networkId = await web3.eth.net.getId() as keyof typeof contractAbi.networks;

      const contractAddress = contractAbi.networks[networkId];

      contract = new web3.eth.Contract(contractAbi.abi, contractAddress.address);

      await getContractOwner();

      dispatch({
        type: ActionTypes.CONNECT_WALLET
      });

      dispatch({
        type: ActionTypes.SET_ADDRESS,
        payload: accounts[0]
      });
    }
  }, [dispatch, getBalance, getContractOwner, provider]);


  useEffect(() => {
    if (typeof provider !== 'undefined') {
      window.ethereum.on('accountsChanged', (account: string[]) => {
        if (account.length) {
          connectWallet();
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
  }, [connectWallet, dispatch, provider]);


  useEffect(() => {
    setTimeout(() => {
      const isWalletConnected = provider._state?.accounts.length;
      if (isWalletConnected) {
        connectWallet();
      } else {
        dispatch({
          type: ActionTypes.DISCONNECT_WALLET
        });
      }
    }, 1500);
  }, []);

  return {
    connectWallet,
    playLottery,
  }
}