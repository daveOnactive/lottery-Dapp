import React from 'react'

export type TableRows<T = any[]> = {
  head: string[];
  body: (data?: T) => React.ReactNode[] | undefined;
}

export type TableComponentProps = {
  rows: TableRows,
  data?: any[],
}