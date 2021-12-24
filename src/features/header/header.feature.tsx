import { FC, useContext } from 'react';
import { Box, Flex, Alert, AlertIcon, Text } from '@chakra-ui/react';

import { LogoComponent, ShowBalanceComponent } from '../../components';
import { AppContext } from '../../providers';

export const HeaderFeature: FC = () => {

  const { state } = useContext(AppContext);
  const address = state?.address;
  const isWalletConnected = state?.isWalletConnected;
  const connectWallet = state?.connectWallet;

  return (
    <Box p='4' pb='6'>
      <Flex justify="space-between">
        <Box />
        <LogoComponent
          width='60px'
          height='60px'
          src='https://res.cloudinary.com/chidi6ix/image/upload/v1640310940/lottery-Dapp/Business__174_-removebg-preview_kbofqk.png'
        />
        <ShowBalanceComponent
          balance={state?.balance}
          address={address}
          isWalletConnected={isWalletConnected}
          connectWallet={connectWallet}
        />
      </Flex>
    </Box>
  )
}