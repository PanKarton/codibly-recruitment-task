import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ColorsResponse } from 'types/colors-array-response';
import { useParams } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

type Context = {
  colorsData: ColorsResponse | null;
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
  const { pageIndex } = useParams();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        if (!pageIndex) return setColorsData(null);

        const response = await fetch(
          `https://reqres.in/api/products?page=${pageIndex}&per_page=${pageSize}`
        );

        const colorsData = await response.json();

        setColorsData(colorsData);
      } catch (err) {
        setColorsData(null);
      }
    };

    fetchColors();
  }, [pageIndex]);

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
