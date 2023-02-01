import { Grid, Paper } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const paperStyles = {
  padding: '1rem',
  minWidth: '37rem',
  minHeight: '30rem',
};

export const ContentWrapper = ({ children }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Paper elevation={3} style={paperStyles}>
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};
