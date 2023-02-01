import React from 'react';
import { Box, Typography } from '@mui/material';
import { LinkButton } from './LinkButton';

export const PageNotFoundMessage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" sx={{ color: '#303030' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ color: '#303030' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <LinkButton toUrl="/colors/1">Back to colors list</LinkButton>
      </Box>
    </Box>
  );
};
