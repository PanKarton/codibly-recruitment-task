import React, { createContext, ReactNode, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ColorsResponse } from 'types/colors-array-response';

type Props = {
  children: ReactNode;
};

type LoaderData = {
  colorsData: ColorsResponse;
};

type Context = {
  colorsData: ColorsResponse;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ColorsDataContext = createContext<Context | null>(null);

export const ColorsDataProvider = ({ children }: Props) => {
  const { colorsData } = useLoaderData() as LoaderData;

  const navigate = useNavigate();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const colorId = event?.currentTarget?.value;
    colorId ? navigate(`/color/${colorId}`) : navigate(`/colors/1`);
  };

  const contextData = {
    colorsData,
    handleOnChange,
  };

  return <ColorsDataContext.Provider value={contextData}>{children}</ColorsDataContext.Provider>;
};

export const useColorsData = () => {
  const colorsData = useContext(ColorsDataContext);

  if (!colorsData) throw Error('useColorsData is supposed to be used inside ColorsDataProvider');

  return colorsData;
};
