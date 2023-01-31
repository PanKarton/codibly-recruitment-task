import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <div>
      Sorry, that page does not exist, go to <Link to="/">home page</Link>
    </div>
  );
};
