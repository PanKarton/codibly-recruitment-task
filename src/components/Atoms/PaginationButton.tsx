import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

type Props = {
  children: ReactNode;
  toUrl: string;
  isDisabled: boolean;
};

export const PaginationButton = ({ children, toUrl, isDisabled }: Props) => {
  return (
    <Button
      disabled={isDisabled}
      component={Link}
      to={toUrl}
      variant="outlined"
      color="secondary"
      style={{ width: '100%' }}
    >
      {children}
    </Button>
  );
};
