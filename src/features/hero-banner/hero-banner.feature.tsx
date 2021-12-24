import { FC, useContext } from 'react';
import { Flex, Box, Button, Stack, Icon } from '@chakra-ui/react';
import { RiAdminFill } from 'react-icons/ri';
import { GiPodiumWinner } from 'react-icons/gi';
import { FaEthereum } from 'react-icons/fa';

import { BannerComponent } from '../../components';
import { AppContext } from '../../providers';

export const HeroBannerFeature: FC = () => {
  const { state } = useContext(AppContext);

  const isWalletConnected = state?.isWalletConnected;

  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Stack direction='row' spacing={4} p='4'>
          {
            isWalletConnected && (
              <>
                <Button leftIcon={<Icon as={FaEthereum} w={5} h={5} />} colorScheme='teal' variant='outline'>
                  Place bet
                </Button>
                <Button leftIcon={<Icon as={GiPodiumWinner} w={5} h={5} />} colorScheme='teal' variant='outline'>
                  Randomly Pick winner
                </Button>
                <Button leftIcon={<Icon as={RiAdminFill} w={5} h={5} />} colorScheme='teal' variant='outline'>
                  Change owner
                </Button>
              </>
            )
          }
        </Stack>
        <BannerComponent />
      </Flex>
    </Box>
  )
}