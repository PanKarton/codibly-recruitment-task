import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

type Props = {
  id: number;
  color: string;
  name: string;
  year: number;
  onClick: () => void;
};

export const ColorTableRow = ({ id, color, name, year, onClick }: Props) => {
  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        ':hover': { filter: 'brightness(95%)', transition: 'all 0.125s' },
        backgroundColor: color,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right" color="white">
        {name}
      </TableCell>
      <TableCell align="right">{year}</TableCell>
    </TableRow>
  );
};
