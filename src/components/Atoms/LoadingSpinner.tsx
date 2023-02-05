import React from 'react';
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const LoadingSpinner = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="25rem"
    >
      <Grid item>
        <CircularProgress data-testid="loading-spinner" />
      </Grid>
    </Grid>
  );
};
