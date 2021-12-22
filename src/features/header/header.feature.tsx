import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react'
import { LogoComponent, ShowBalanceComponent } from '../../components';

export const HeaderFeature: FC = () => {
  const balance = '0.5';
  const address = '0x0c2E38c13fa03b79b0D128Aa339788d4D0fee8CD';

  return (
    <Box p='2'>
      <Flex justify="space-between">
        <Box />
        <LogoComponent width='60px' height='60px' src='https://o.remove.bg/downloads/0caec46b-3979-4b25-bd4e-437c17d6454c/Business__174_-removebg-preview.png' />
        <ShowBalanceComponent balance={balance} address={address} />
      </Flex>
    </Box>
  )
}