import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

type Context = {
  colorsData: string;
};

const ColorsDataContext = createContext<Context | null>(null);

export const ColorsDataProvider = ({ children }: Props) => {
  const [colorsData, setColorsData] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setColorsData('siema');
  }, []);

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
