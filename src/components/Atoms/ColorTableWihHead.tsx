import React, { ReactNode } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {
  children: ReactNode;
};

export const ColorTableWihHead = ({ children }: Props) => {
  return (
    <TableContainer component={Paper} sx={{ border: '1px solid #ccc', borderBottom: 'none' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Color id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};
