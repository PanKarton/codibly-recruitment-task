import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

type Props = {
  children: string;
  toUrl: string;
  isDisabled?: boolean;
  isBig?: boolean;
};

export const LinkButton = ({ children, toUrl, isDisabled, isBig }: Props) => {
  return (
    <Button
      disabled={isDisabled}
      component={Link}
      to={toUrl}
      variant="outlined"
      color="secondary"
      sx={{
        width: isBig ? '100%' : 'auto',
        paddingBlock: isBig ? '1rem' : '.25rem',
        fontSize: '1rem',
        textTransform: 'none',
      }}
    >
      {children}
    </Button>
  );
};
