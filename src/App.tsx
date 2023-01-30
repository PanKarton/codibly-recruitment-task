import './App.css';
import React from 'react';
import { useColorsData } from 'src/providers/ColorsProvider';

export function App() {
  const colors = useColorsData();

  console.log(colors.colorsData);

  return <div className="App">Siema</div>;
}
