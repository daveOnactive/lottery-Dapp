import { FC } from 'react';
import { Flex, Box, Icon, Tooltip, Button } from '@chakra-ui/react';
import { SiEthereum } from 'react-icons/si';
import { GrConnect } from 'react-icons/gr';

import { ShowBalanceComponentProps } from '.';

export const ShowBalanceComponent: FC<ShowBalanceComponentProps> = ({ balance, address, isWalletConnected, connectWallet }) => {
  const formatedBalance = `${balance} ETH`;
  return (
    <Box borderWidth='1px' borderRadius='lg' textAlign='center' display='flex' p='3' cursor='pointer' alignItems='center'>
      {
        isWalletConnected ? (
          <Flex align='center' justify='center'>
            <Box p='1' display='flex' align='center'>
              <Icon as={SiEthereum} w={6} h={6} />
            </Box>
            <Tooltip label={address} fontSize='md'>
              <Flex>
                <Box mx='1'>
                  wallet:
                </Box>
                <Box>{formatedBalance}</Box>
              </Flex>
            </Tooltip>
          </Flex>
        ) : (
          <Button onClick={connectWallet} leftIcon={<Icon as={GrConnect} w={5} h={5} />} colorScheme='teal' variant='solid'>
            Connect Wallet
          </Button>
        )
      }
    </Box>
  )
}