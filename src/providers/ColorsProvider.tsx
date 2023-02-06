import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ColorsResponse } from 'types/colors-array-response';
import { useParams } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

type Context = {
  colorsData: ColorsResponse | null;
  isLoading: boolean;
};

export const pageSize = 5;

const ColorsDataContext = createContext<Context | null>(null);

export const ColorsDataProvider = ({ children }: Props) => {
  const [colorsData, setColorsData] = useState<ColorsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { pageIndex } = useParams();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        if (!pageIndex) return setColorsData(null);
        setIsLoading(true);

        const response = await fetch(
          `https://reqres.in/api/products?page=${pageIndex}&per_page=${pageSize}`
        );

        const colorsData = await response.json();

        setColorsData(colorsData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setColorsData(null);
      }
    };

    fetchColors();
  }, [pageIndex]);

  const contextData = {
    colorsData,
    isLoading,
  };

  return <ColorsDataContext.Provider value={contextData}>{children}</ColorsDataContext.Provider>;
};

export const useColorsData = () => {
  const colorsData = useContext(ColorsDataContext);

  if (!colorsData) throw Error('useColorsData is supposed to be used inside ColorsDataProvider');

  return colorsData;
};
