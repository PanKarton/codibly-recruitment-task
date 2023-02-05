import React from 'react';
import { LinkButton } from '../../Atoms/LinkButton';
import { useColorsData } from 'src/providers/ColorsProvider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import { ColorTableWihHead } from '../../Atoms/ColorTableWihHead';
import { ColorTableRow } from '../../Atoms/ColorTableRow';
import { NoConnectionMessage } from '../../Atoms/NoConnectionMessage';
import { useModal } from 'src/providers/ModalProvider';
import { ColorModal } from '../../Atoms/ColorModal';
import { ColorTableError } from '../../Atoms/ColorTableError';
import { LoadingSpinner } from '../../Atoms/LoadingSpinner';

export const ColorsTable = () => {
  const { colorsData, isLoading } = useColorsData();
  const { handleOpenModal } = useModal();

  const pageSize = 5;

  if (isLoading) return <LoadingSpinner />;

  if (colorsData === null) return <NoConnectionMessage />;

  const { page, data } = colorsData;

  const isLeftButtonDisabled = !page || page <= 1 || data.length === 0;
  const isRightButtonDisabled = !page || data.length === 0 || data.length !== pageSize;

  return (
    <>
      {data.length !== 0 ? (
        <ColorTableWihHead>
          {data.map(color => (
            <ColorTableRow
              key={color.id}
              color={color.color}
              name={color.name}
              year={color.year}
              id={color.id}
              onClick={() => handleOpenModal(color)}
            />
          ))}
        </ColorTableWihHead>
      ) : (
        <ColorTableError />
      )}
      <Grid
        container
        maxWidth="37.125rem"
        spacing={2}
        justifyContent="space-between"
        sx={{ position: 'absolute', bottom: '1.5rem' }}
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
      <ColorModal />
    </>
  );
};
