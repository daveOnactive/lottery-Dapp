import { FC } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from '@chakra-ui/react';

import { TableComponentProps } from '.'

export const TableComponent: FC<TableComponentProps> = ({ rows }) => {

  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          {rows.head.map(item => (
            <Th>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.body.map(item => (
          <Tr>
            {item}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}