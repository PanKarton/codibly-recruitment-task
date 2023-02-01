import { Alert, Link } from '@mui/material';
import React from 'react';

export const ColorError = () => {
  return (
    <Alert severity="error">
      Sorry, color with that id does not exist, go to <Link href="/">home page</Link> or
      <Link href="/colors/1"> display colors list.</Link>
    </Alert>
  );
};
