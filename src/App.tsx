import './App.css';
import React from 'react';
import { useColorsData } from 'src/providers/ColorsProvider';

export function App() {
  const colors = useColorsData();

  return (
    <div className="App">
      {colors.colorsData.map((color, index) => (
        <div key={index}>{`${color.name}, ${color.year}, ${color.pantone_value}`}</div>
      ))}
    </div>
  );
}
