import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ColorElement } from 'types/colors-response';

type Props = {
  children: ReactNode;
};

type Context = {
  colorsData: ColorElement[];
};

const ColorsDataContext = createContext<Context | null>(null);

const pageSize = 5;

export const ColorsDataProvider = ({ children }: Props) => {
  const [colorsData, setColorsData] = useState([]);

  useEffect(() => {
    const fetchFirstPageOfColors = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/products?page=1&per_page=${pageSize}`);
        const data = await response.json();

        setColorsData(data.data);
      } catch (err) {
        console.log({ err });
      }
    };
    fetchFirstPageOfColors();
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
