import { FC } from 'react';
import { Box, Image, Text } from '@chakra-ui/react'

export const WalletNotConnectedComponent: FC = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <Image w='300px' h='300px' src='https://res.cloudinary.com/chidi6ix/image/upload/v1640386674/lottery-Dapp/vecteezy_coins-cash-with-wallet-isolated-icon_-removebg-preview_voqcte.png' />
      <Text my='2' fontSize='3xl'>Connect your wallet to view games</Text>
    </Box>
  )
}