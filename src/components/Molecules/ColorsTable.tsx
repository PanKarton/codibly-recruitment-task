import React from 'react';
import { Link } from 'react-router-dom';
import { pageSize } from 'src';
import { PaginationButton } from '../Atoms/PaginationButton';
import { useColorsData } from 'src/providers/ColorsProvider';

export const ColorsTable = () => {
  const {
    colorsData: { page, data },
  } = useColorsData();

  const isLeftLinkActive = page && page > 1 && data.length != 0;
  const isRightLinkActive = page && data.length != 0 && data.length === pageSize;

  return (
    <>
      <div>
        {data.length ? (
          <ul>
            {data.map(color => (
              <li key={color.id}>{`${color.name}`}</li>
            ))}
          </ul>
        ) : (
          <div>
            <p>Aint no items</p>
            <Link to="/">Home page</Link>
          </div>
        )}
      </div>
      {isLeftLinkActive && (
        <PaginationButton toUrl={`/colors/${page - 1}`}>Previous</PaginationButton>
      )}
      {isRightLinkActive && <PaginationButton toUrl={`/colors/${page + 1}`}>Next</PaginationButton>}
    </>
  );
};
