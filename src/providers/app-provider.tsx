import React, { FC, createContext, useReducer } from 'react';

import { useWeb3Client } from '../hooks';

export type InitialState = {
  address?: string;
  isAdmin: boolean;
  isWalletConnected: boolean;
  connectWallet?: () => void;
  balance: string;
  isLoading: boolean;
  contractOwner?: string;
  playLottery?: () => void;
  isSendingTransaction?: boolean;
  lotteryList: any[];
  contractBalance?: string;
}

export enum ActionTypes {
  SET_ADDRESS = 'setAddress',
  CONNECT_WALLET = 'connectWallet',
  SET_BALANCE = 'setBalance',
  DISCONNECT_WALLET = 'disconnectWallet',
  SET_CONTRACT_OWNER = 'setContractOwner',
  SET_ADMIN = 'setAdmin',
  SEND_TRANSACTION_IN_PROGRESS = 'sendTransactionInProgress',
  SEND_TRANSACTION_DONE = 'sendTransactionDone',
  SET_LOTTERY_LIST = 'setLotteryList',
  SET_CONTRACT_BALANCE = 'setContractBalance',
}

export type Actions = {
  type: ActionTypes;
  payload?: any;
}


type AppContextType = {
  state?: InitialState,
  dispatch?: React.Dispatch<any>
}


export const AppContext = createContext<AppContextType>({});

const reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.CONNECT_WALLET:
      return {
        ...state,
        isWalletConnected: true,
        isLoading: false,
      }
    case ActionTypes.DISCONNECT_WALLET:
      return {
        ...state,
        isWalletConnected: false,
        address: '',
        balance: '0',
        isLoading: false,
      }
    case ActionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      }
    case ActionTypes.SET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      }
    case ActionTypes.SET_ADMIN:
      return {
        ...state,
        isAdmin: true,
      }
    case ActionTypes.SET_CONTRACT_OWNER:
      return {
        ...state,
        contractOwner: action.payload,
      }
    case ActionTypes.SEND_TRANSACTION_DONE:
      return {
        ...state,
        isSendingTransaction: false,
      }
    case ActionTypes.SEND_TRANSACTION_IN_PROGRESS:
      return {
        ...state,
        isSendingTransaction: true,
      }
    case ActionTypes.SET_LOTTERY_LIST:
      return {
        ...state,
        lotteryList: action.payload
      }
    case ActionTypes.SET_CONTRACT_BALANCE:
      return {
        ...state,
        contractBalance: action.payload,
      }
    default:
      return state;
  }
}

const initialState: InitialState = {
  address: "",
  isAdmin: false,
  isWalletConnected: false,
  balance: '0',
  isLoading: true,
  isSendingTransaction: false,
  lotteryList: [],
}

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { connectWallet, playLottery } = useWeb3Client({
    dispatch
  });

  const clonedState = {
    ...state,
    connectWallet,
    playLottery
  }

  return (
    <AppContext.Provider value={{
      state: clonedState,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  )
}

