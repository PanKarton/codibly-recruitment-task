import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { SingleColorResponse } from 'types/single-color-response';
import { Error } from './Error';
//
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LinkButton } from '../Atoms/LinkButton';
import { Stack } from '@mui/system';

type LoaderData = {
  colorData: SingleColorResponse;
};

export const SingleColor = () => {
  const { colorData } = useLoaderData() as LoaderData;

  if (!Object.keys(colorData).length) return <Error />;

  const { id, color, year, name } = colorData.data;

  return (
    <Stack gap={2}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Color id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              style={{
                backgroundColor: color,
                cursor: 'pointer',
              }}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                ':hover': { filter: 'brightness(95%)', transition: 'all 0.125s' },
              }}
            >
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right">{year}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <LinkButton toUrl="/colors/1">Back to colors list</LinkButton>
    </Stack>
  );
};
