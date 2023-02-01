import { Grid, Paper } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
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
      <Grid item sx={{ width: 'min(90%, 40rem)' }}>
        <Paper elevation={3} sx={{ position: 'relative', padding: '1.5rem', minHeight: '30rem' }}>
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};
