import React from 'react';
import { Link } from 'react-router-dom';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper.styles';
import Button from '@mui/material/Button';

export const Home = () => {
  return (
    <main>
      <ContentWrapper>
        <Button component={Link} to="/colors/1" variant="outlined" color="secondary">
          Show me colors!
        </Button>
      </ContentWrapper>
    </main>
  );
};
