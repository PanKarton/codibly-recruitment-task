import React from 'react';
import { pageSize } from 'src';
import { PaginationButton } from '../Atoms/PaginationButton';
import { useColorsData } from 'src/providers/ColorsProvider';
//
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';

export const ColorsTable = () => {
  const {
    colorsData: { page, data },
  } = useColorsData();

  const isLeftButtonDisabled = !page || page <= 1 || data.length === 0;
  const isRightButtonDisabled = !page || data.length === 0 || data.length !== pageSize;

  return (
    <>
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
            {data.map(color => (
              <TableRow
                key={color.id}
                style={{
                  backgroundColor: color.color,
                  cursor: 'pointer',
                }}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  ':hover': { filter: 'brightness(95%)', transition: 'all 0.125s' },
                }}
              >
                <TableCell component="th" scope="row">
                  {color.id}
                </TableCell>
                <TableCell align="right">{color.name}</TableCell>
                <TableCell align="right">{color.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container columnSpacing={1}>
        <Grid item xs={6}>
          {page && (
            <PaginationButton isDisabled={isLeftButtonDisabled} toUrl={`/colors/${page - 1}`}>
              <ArrowBackIosIcon />
            </PaginationButton>
          )}
        </Grid>
        <Grid item xs={6}>
          {page && (
            <PaginationButton isDisabled={isRightButtonDisabled} toUrl={`/colors/${page + 1}`}>
              <ArrowForwardIos />
            </PaginationButton>
          )}
        </Grid>
      </Grid>
    </>
  );
};
