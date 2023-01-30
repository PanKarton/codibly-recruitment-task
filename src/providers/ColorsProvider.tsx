import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ColorElement } from 'types/colors-response';

type Props = {
  children: ReactNode;
};

type Context = {
  colorsData: ColorElement[];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ColorsDataContext = createContext<Context | null>(null);

const pageSize = 5;

export const ColorsDataProvider = ({ children }: Props) => {
  const [colorsData, setColorsData] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const fetchFirstPageOfColors = async () => {
      try {
        console.log(pageIndex);

        const response = await fetch(
          `https://reqres.in/api/products?page=${pageIndex}&per_page=${pageSize}`
        );
        const data = await response.json();

        setColorsData(data.data);
      } catch (err) {
        console.log({ err });
      }
    };
    fetchFirstPageOfColors();
  }, [pageIndex]);

  const contextData = {
    colorsData,
    setPageIndex,
  };

  return <ColorsDataContext.Provider value={contextData}>{children}</ColorsDataContext.Provider>;
};

export const useColorsData = () => {
  const colorsData = useContext(ColorsDataContext);

  if (!colorsData) throw Error('useColorsData is supposed to be used inside ColorsDataProvider');

  return colorsData;
};
