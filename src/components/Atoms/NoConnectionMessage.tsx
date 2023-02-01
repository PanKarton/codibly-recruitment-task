import { Alert } from '@mui/material';
import React from 'react';

export const NoConnectionMessage = () => {
  return (
    <Alert severity="error">
      No internet connection. Please check your network settings and try again
    </Alert>
  );
};
