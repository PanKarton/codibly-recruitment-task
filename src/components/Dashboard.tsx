import React from 'react';
import { useColorsData } from 'src/providers/ColorsProvider';
import { ColorsTable } from './ColorsTable';

export const Dashboard = () => {
  const { colorsData, handleOnChange } = useColorsData();

  return (
    <main>
      <input type="number" onChange={handleOnChange} />
      <ColorsTable colorsData={colorsData.data} index={colorsData.page} />
    </main>
  );
};
