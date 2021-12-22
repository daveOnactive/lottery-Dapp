import { FC } from 'react';

import { HeaderFeature, HeroBannerFeature, LotteryListFeature } from '../features'

export const HomeView: FC = () => {
  return (
    <main>
      <HeaderFeature />
      <HeroBannerFeature />
      <LotteryListFeature />
    </main>
  )
}