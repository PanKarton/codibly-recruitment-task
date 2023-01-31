import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { SingleColorResponse } from 'types/single-color-response';
import { Error } from './Error';

type LoaderData = {
  colorData: SingleColorResponse;
};

export const SingleColor = () => {
  const { colorData } = useLoaderData() as LoaderData;

  if (!Object.keys(colorData).length) return <Error />;

  return (
    <div>
      <p>{`${colorData.data.name} - ${colorData.data.year}`}</p>
      <Link to="/colors/1">colors list</Link>
    </div>
  );
};
