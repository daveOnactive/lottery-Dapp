export type ShowBalanceComponentProps = {
  balance?: string;
  address?: string;
  isWalletConnected?: boolean;
  connectWallet?: () => void;
}