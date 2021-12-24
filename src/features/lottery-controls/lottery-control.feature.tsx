import { FC, useContext } from 'react';
import { Flex, Box, Button, Stack, Icon, Alert, AlertIcon, Text, AlertTitle, AlertDescription, } from '@chakra-ui/react';
import { RiAdminFill } from 'react-icons/ri';
import { GiPodiumWinner } from 'react-icons/gi';
import { FaEthereum } from 'react-icons/fa';
import { GrConnect } from 'react-icons/gr';

import { AppContext } from '../../providers';

export const LotteryControlFeature: FC = () => {

  const { state } = useContext(AppContext);

  const isWalletConnected = state?.isWalletConnected;
  const isAdmin = state?.isAdmin;
  const playLottery = state?.playLottery;
  const isSendingTransaction = state?.isSendingTransaction;
  const connectWallet = state?.connectWallet;
  const contractBalance = state?.contractBalance;
  const totalPlayers = state?.lotteryList?.length;

  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      display='flex'
      p='4'
      cursor='pointer'
      alignItems='center'
      w='50%'>
      <Flex flexDirection='column'>
        <Alert status='warning' mb='6'>
          <AlertIcon />
          <Box flex='1'>
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Blockchain Network Notice!
            </AlertTitle>
            <AlertDescription>This Application currently hosted on the Rospten Test Mainnet</AlertDescription>
          </Box>
        </Alert>
        {
          isWalletConnected ? (
            <>
              <Text mb='4' fontSize='1xl' fontWeight='semibold'>Total Crypto: {contractBalance}ETH</Text>
              <Text mb='4' fontSize='1xl' fontWeight='semibold'>Total Players: {totalPlayers}</Text>
              <Stack direction='row' spacing={4}>
                <Button
                  onClick={playLottery}
                  leftIcon={<Icon as={FaEthereum} w={5} h={5} />}
                  colorScheme='teal'
                  variant='outline'
                  isLoading={isSendingTransaction}
                  loadingText='Sending Transaction'
                >
                  Play game
                </Button>
                {
                  isAdmin && (
                    <>
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
            </>
          ) : (
            <Button w='50%' onClick={connectWallet} leftIcon={<Icon as={GrConnect} w={5} h={5} />} colorScheme='teal' variant='solid'>
              Connect Wallet
            </Button>
          )
        }
      </Flex>
    </Box>
  )
}