import React from 'react';
import { Link } from 'react-router-dom';
import { ColorElement } from 'types/colors-array-response';

type Props = {
  colorsData: ColorElement[];
  index?: number;
};

export const ColorsTable = ({ colorsData, index }: Props) => {
  const isLeftLinkActive = index && index > 1;
  const isRightLinkActive = index && colorsData.length !== 0;

  return (
    <>
      <div>
        {colorsData.length ? (
          <ul>
            {colorsData.map(color => (
              <li key={color.id}>{`${color.name}`}</li>
            ))}
          </ul>
        ) : (
          <p>No more items</p>
        )}
      </div>
      {isLeftLinkActive && <Link to={`/colors/${index - 1}`}>Previous</Link>}
      {isRightLinkActive && <Link to={`/colors/${index + 1}`}>Next</Link>}
    </>
  );
};
