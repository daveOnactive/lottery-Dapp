import React from 'react'

type Tabs = {
  titles: string[],
  children: React.ReactNode[]
}

export type TabsComponentProps = {
  tabs: Tabs;
}