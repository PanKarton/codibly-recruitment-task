import React from 'react';
import { pageSize } from 'src';
import { LinkButton } from '../Atoms/LinkButton';
import { useColorsData } from 'src/providers/ColorsProvider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import { ColorTableWihHead } from '../Atoms/ColorTableWihHead';
import { ColorTableRow } from '../Atoms/ColorTableRow';
import { NoConnectionMessage } from '../Atoms/NoConnectionMessage';

export const ColorsTable = () => {
  const { colorsData } = useColorsData();

  if (colorsData === null) return <NoConnectionMessage />;

  const { page, data } = colorsData;

  const isLeftButtonDisabled = !page || page <= 1 || data.length === 0;
  const isRightButtonDisabled = !page || data.length === 0 || data.length !== pageSize;

  return (
    <>
      <ColorTableWihHead>
        {data.map(({ id, color, name, year }) => (
          <ColorTableRow key={id} color={color} name={name} year={year} id={id} />
        ))}
      </ColorTableWihHead>
      <Grid
        container
        maxWidth="37.125rem"
        spacing={2}
        justifyContent="space-between"
        style={{ position: 'absolute', bottom: '1.5rem' }}
      >
        <Grid item xs={5.8} style={{ paddingLeft: '0' }}>
          {page && (
            <LinkButton isBig isDisabled={isLeftButtonDisabled} toUrl={`/colors/${page - 1}`}>
              <ArrowBackIosIcon />
            </LinkButton>
          )}
        </Grid>
        <Grid item xs={5.8} style={{ paddingLeft: '0' }}>
          {page && (
            <LinkButton isBig isDisabled={isRightButtonDisabled} toUrl={`/colors/${page + 1}`}>
              <ArrowForwardIos />
            </LinkButton>
          )}
        </Grid>
      </Grid>
    </>
  );
};
