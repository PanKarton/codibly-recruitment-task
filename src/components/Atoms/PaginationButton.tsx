import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: string;
  toUrl: string;
};

export const PaginationButton = ({ children, toUrl }: Props) => {
  return <Link to={toUrl}>{children}</Link>;
};
