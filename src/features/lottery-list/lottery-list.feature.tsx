import { FC, useMemo, useContext, useCallback } from 'react';
import { Td, Box, Image } from '@chakra-ui/react';

import { TableComponent, TabsComponent, WalletNotConnectedComponent } from '../../components';
import { TableRows } from '../../components/table';
import { AppContext } from '../../providers';

export const LotteryListFeature: FC = () => {

  const { state } = useContext(AppContext);

  const isWalletConnected = state?.isWalletConnected;
  const lotteryList = state?.lotteryList;

  const rows = useMemo<TableRows<string[]>>(() => (
    {
      head: ['Address', 'Bet'],
      body: (rows) => rows?.map(row => (
        <>
          <Td>{row}</Td>
          <Td>0.01ETH</Td>
        </>
      ))
    }
  ), []);

  const renderCurrentGame = useCallback(() => {
    if (isWalletConnected) return <TableComponent rows={rows} data={lotteryList} />
    return <WalletNotConnectedComponent />
  }, [isWalletConnected, lotteryList, rows])

  const tabs = useMemo(() => (
    {
      titles: ['Current Game', 'Game History'],
      children: [
        renderCurrentGame(),
        <Box display='flex' justifyContent='center' align='center'>
          <Image src='https://res.cloudinary.com/chidi6ix/image/upload/v1640387748/lottery-Dapp/Group_1_wuqrp5.svg' w='550px' h='550px' />
        </Box>
      ],
    }
  ), [renderCurrentGame]);

  return (
    <Box p='4'>
      <TabsComponent tabs={tabs} />
    </Box>
  );
};
