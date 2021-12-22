import { FC } from 'react';
import { Flex, Box, Icon, Tooltip } from '@chakra-ui/react';
import { SiEthereum } from 'react-icons/si'

import { ShowBalanceComponentProps } from '.';

export const ShowBalanceComponent: FC<ShowBalanceComponentProps> = ({ balance, address }) => {
  const formatedBalance = `${balance} ETH`;
  return (
    <Flex align='center'>
      <Box>
        <Icon as={SiEthereum} w={5} h={5} />
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
  )
}