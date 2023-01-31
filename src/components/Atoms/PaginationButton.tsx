import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

type Props = {
  children: string;
  toUrl: string;
};

export const PaginationButton = ({ children, toUrl }: Props) => {
  return (
    <Button component={Link} to={toUrl} variant="outlined" color="secondary">
      {children}
    </Button>
  );
};
