import { FC, useMemo } from 'react';
import { Td, Box } from '@chakra-ui/react';

import { TableComponent, TabsComponent } from '../../components';

export const LotteryListFeature: FC = () => {

  const rows = useMemo(() => (
    {
      head: ['Address', 'Bet', 'Date'],
      body: [
        <>
          <Td>jnrguhriuhgrhgirhgihrighrg</Td>
          <Td>0.01 ETH</Td>
          <Td>12 Dec 2021</Td>
        </>,
        <>
          <Td>jnrguhriuhgrhgirhgihrighrg</Td>
          <Td>0.01 ETH</Td>
          <Td>12 Dec 2021</Td>
        </>,
        <>
          <Td>jnrguhriuhgrhgirhgihrighrg</Td>
          <Td>0.01 ETH</Td>
          <Td>12 Dec 2021</Td>
        </>,
        <>
          <Td>jnrguhriuhgrhgirhgihrighrg</Td>
          <Td>0.01 ETH</Td>
          <Td>12 Dec 2021</Td>
        </>,
        <>
          <Td>jnrguhriuhgrhgirhgihrighrg</Td>
          <Td>0.01 ETH</Td>
          <Td>12 Dec 2021</Td>
        </>,
        <>
          <Td>jnrguhriuhgrhgirhgihrighrg</Td>
          <Td>0.01 ETH</Td>
          <Td>12 Dec 2021</Td>
        </>
      ]
    }
  ), [])

  const tabs = useMemo(() => (
    {
      titles: ['Current Game', 'Game History'],
      children: [
        <TableComponent rows={rows} />,
        <p>Coming soon</p>
      ],
    }
  ), [rows]);

  return (
    <Box p='4'>
      <TabsComponent tabs={tabs} />
    </Box>
  );
};
