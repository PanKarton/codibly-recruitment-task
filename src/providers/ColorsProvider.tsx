import React, { createContext, ReactNode, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { ColorsResponse } from 'types/colors-array-response';

type Props = {
  children: ReactNode;
};

type LoaderData = {
  colorsData: ColorsResponse;
};

type Context = {
  colorsData: ColorsResponse;
};

const ColorsDataContext = createContext<Context | null>(null);

export const ColorsDataProvider = ({ children }: Props) => {
  const { colorsData } = useLoaderData() as LoaderData;

  const contextData = {
    colorsData,
  };

  return <ColorsDataContext.Provider value={contextData}>{children}</ColorsDataContext.Provider>;
};

export const useColorsData = () => {
  const colorsData = useContext(ColorsDataContext);

  if (!colorsData) throw Error('useColorsData is supposed to be used inside ColorsDataProvider');

  return colorsData;
};
