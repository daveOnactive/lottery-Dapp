import { FC, useContext } from 'react';
import { Box, Flex, Alert, AlertIcon, Text } from '@chakra-ui/react';

import { LogoComponent, ShowBalanceComponent } from '../../components';
import { AppContext } from '../../providers';

export const HeaderFeature: FC = () => {

  const { state } = useContext(AppContext);

  return (
    <Box p='4' pb='6'>
      <Flex justify="space-between">
        <Box>
          <Alert status='warning' w='100%'>
            <AlertIcon />
            <Text>This application is hosted on <Text fontWeight='bold' fontStyle='italic'>'ROPSTEN TEST NETWORK'</Text></Text>
          </Alert>
        </Box>
        <LogoComponent width='60px' height='60px' src='https://res.cloudinary.com/chidi6ix/image/upload/v1640310940/lottery-Dapp/Business__174_-removebg-preview_kbofqk.png' />
        <ShowBalanceComponent balance={state?.balance} address={state?.address} isWalletConnected={state?.isWalletConnected} connectWallet={state?.connectWallet} />
      </Flex>
    </Box>
  )
}