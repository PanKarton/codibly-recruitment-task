import { Alert, Link } from '@mui/material';
import React from 'react';

export const ColorError = () => {
  return (
    <Alert severity="error">
      Sorry, color with that id does not exist. <Link href="/colors/1">Go to colors list.</Link>
    </Alert>
  );
};
