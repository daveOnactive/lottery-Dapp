import { FC, useMemo, useContext, useCallback } from 'react';
import { Td, Box } from '@chakra-ui/react';

import { TableComponent, TabsComponent } from '../../components';
import { AppContext } from '../../providers';

export const LotteryListFeature: FC = () => {

  const { state } = useContext(AppContext);

  const isWalletConnected = state?.isWalletConnected;

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
  ), []);

  const renderCurrentGame = useCallback(() => {
    if (isWalletConnected) return <TableComponent rows={rows} />
    return 'Connect your wallet to view games'
  }, [isWalletConnected, rows])

  const tabs = useMemo(() => (
    {
      titles: ['Current Game', 'Game History'],
      children: [
        renderCurrentGame(),
        <p>Coming soon</p>
      ],
    }
  ), [renderCurrentGame]);

  return (
    <Box p='4'>
      <TabsComponent tabs={tabs} />
    </Box>
  );
};
