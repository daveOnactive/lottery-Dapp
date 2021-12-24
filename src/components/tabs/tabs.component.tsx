import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { FC } from 'react';

import { TabsComponentProps } from '.'

export const TabsComponent: FC<TabsComponentProps> = ({ tabs }) => {

  return (
    <Tabs variant='enclosed'>
      <TabList>
        {
          tabs.titles.map((title) => (
            <Tab key={title}>{title}</Tab>
          ))
        }
      </TabList>
      <TabPanels>
        {
          tabs.children.map((element, index) => (
            <TabPanel key={index}>{element}</TabPanel>
          ))
        }
      </TabPanels>
    </Tabs>
  )
}