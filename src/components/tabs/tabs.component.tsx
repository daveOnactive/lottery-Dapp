import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { FC } from 'react';

import { TabsComponentProps } from '.'

export const TabsComponent: FC<TabsComponentProps> = ({ tabs }) => {

  return (
    <Tabs variant='enclosed'>
      <TabList>
        {
          tabs.titles.map((title) => (
            <Tab>{title}</Tab>
          ))
        }
      </TabList>
      <TabPanels>
        {
          tabs.children.map((title) => (
            <TabPanel>{title}</TabPanel>
          ))
        }
      </TabPanels>
    </Tabs>
  )
}