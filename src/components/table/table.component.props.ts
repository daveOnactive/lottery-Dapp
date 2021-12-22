import React from 'react'

type Rows = {
  head: string[];
  body: React.ReactNode[];
}

export type TableComponentProps = {
  rows: Rows
}