import React, { FC, createContext, useReducer } from 'react';

import { useWeb3Client } from '../hooks';

export type InitialState = {
  address?: string;
  isAdmin: boolean;
  isWalletConnected: boolean;
  connectWallet?: () => void;
  balance: string;
  isLoading: boolean;
}

export enum ActionTypes {
  SET_ADDRESS = 'setAddress',
  CONNECT_WALLET = 'connectWallet',
  SET_BALANCE = 'setBalance',
  DISCONNECT_WALLET = 'disconnectWallet',
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
}

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { connectWallet, } = useWeb3Client({
    dispatch
  });

  const clonedState = {
    ...state,
    connectWallet
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

