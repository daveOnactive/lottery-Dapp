import { FC, useContext } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { BannerComponent } from '../../components';
import { AppContext } from '../../providers';
import { LotteryControlFeature } from '..'

export const HeroBannerFeature: FC = () => {
  return (
    <Box>
      <Flex justify="space-between" align="center">
        <LotteryControlFeature />
        <BannerComponent />
      </Flex>
    </Box>
  )
}