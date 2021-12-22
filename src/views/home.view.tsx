import { FC } from 'react';

import { HeaderFeature, HeroBannerFeature } from '../features'

export const HomeView: FC = () => {

  // const rows = {
  //   head: ['Address', 'Bet', 'Date'],
  //   body: [
  //     <>
  //       <Td>jnrguhriuhgrhgirhgihrighrg</Td>
  //       <Td>0.01 ETH</Td>
  //       <Td>12 Dec 2021</Td>
  //     </>,
  //     <>
  //       <Td>jnrguhriuhgrhgirhgihrighrg</Td>
  //       <Td>0.01 ETH</Td>
  //       <Td>12 Dec 2021</Td>
  //     </>,
  //     <>
  //       <Td>jnrguhriuhgrhgirhgihrighrg</Td>
  //       <Td>0.01 ETH</Td>
  //       <Td>12 Dec 2021</Td>
  //     </>,
  //     <>
  //       <Td>jnrguhriuhgrhgirhgihrighrg</Td>
  //       <Td>0.01 ETH</Td>
  //       <Td>12 Dec 2021</Td>
  //     </>,
  //     <>
  //       <Td>jnrguhriuhgrhgirhgihrighrg</Td>
  //       <Td>0.01 ETH</Td>
  //       <Td>12 Dec 2021</Td>
  //     </>,
  //     <>
  //       <Td>jnrguhriuhgrhgirhgihrighrg</Td>
  //       <Td>0.01 ETH</Td>
  //       <Td>12 Dec 2021</Td>
  //     </>
  //   ]
  // }

  // const tabData = {
  //   titles: ['one', 'two', 'three'],
  //   children: [
  //     <TableComponent rows={rows} />,
  //     <p>two!</p>,
  //     <p>three!</p>
  //   ],
  // }

  return (
    <main>
      <HeaderFeature />
      <HeroBannerFeature />
    </main>
  )
}