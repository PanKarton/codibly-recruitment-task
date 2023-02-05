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

const pageSize = 5;

const ColorsDataContext = createContext<Context | null>(null);

const initColorsState = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [],
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};

export const ColorsDataProvider = ({ children }: Props) => {
  const [colorsData, setColorsData] = useState<ColorsResponse | null>(initColorsState);
  const [isLoading, setIsLoading] = useState(false);
  const { pageIndex } = useParams();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        setIsLoading(true);
        if (!pageIndex) return setColorsData(null);

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
    isLoading,
    colorsData,
  };

  return <ColorsDataContext.Provider value={contextData}>{children}</ColorsDataContext.Provider>;
};

export const useColorsData = () => {
  const colorsData = useContext(ColorsDataContext);

  if (!colorsData) throw Error('useColorsData is supposed to be used inside ColorsDataProvider');

  return colorsData;
};
