import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export const Home = () => {
  return (
    <main>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight={'100vh'}
      >
        <Typography variant="h1" style={{ color: '#303030', fontSize: '4rem' }}>
          Color table
        </Typography>
        <Typography variant="h2" style={{ color: '#303030', fontSize: '2rem' }}>
          {`Let's see what fancy colors Codibly prepared for us!`}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button component={Link} to="/colors/1" variant="outlined" color="secondary">
            {`Show 'em!`}
          </Button>
        </Box>
      </Box>
    </main>
  );
};
