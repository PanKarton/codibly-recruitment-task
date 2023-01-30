import React, { useEffect } from 'react';
import { useColorsData } from 'src/providers/ColorsProvider';
import { useParams } from 'react-router';

export const Dashboard = () => {
  const { colorsData, setPageIndex } = useColorsData();
  const { pageIndex } = useParams();

  useEffect(() => {
    console.log(pageIndex);

    if (!pageIndex) return;
    // Must check if index is string. If not, throw 404
    setPageIndex(() => parseInt(pageIndex));
  }, [pageIndex]);

  return (
    <ul>
      {colorsData.map(color => (
        <li key={color.id}>{`${color.name}`}</li>
      ))}
    </ul>
  );
};
