import React from 'react';
import { LinkButton } from '../../Atoms/LinkButton';
import { pageSize, useColorsData } from 'src/providers/ColorsProvider';
import Grid from '@mui/material/Grid';
import { ColorTableWihHead } from '../../Atoms/ColorTableWihHead';
import { ColorTableRow } from '../../Atoms/ColorTableRow';
import { NoConnectionMessage } from '../../Atoms/NoConnectionMessage';
import { useModal } from 'src/providers/ModalProvider';
import { ColorModal } from '../../Atoms/ColorModal';
import { ColorTableError } from '../../Atoms/ColorsTableError';
import { LoadingSpinner } from 'src/components/Atoms/LoadingSpinner';

export const ColorsTable = () => {
  const { colorsData, isLoading } = useColorsData();
  const { handleOpenModal } = useModal();

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
              Previous page
            </LinkButton>
          )}
        </Grid>
        <Grid item xs={5.8} style={{ paddingLeft: '0' }}>
          {page && (
            <LinkButton isBig isDisabled={isRightButtonDisabled} toUrl={`/colors/${page + 1}`}>
              Next page
            </LinkButton>
          )}
        </Grid>
      </Grid>
      <ColorModal />
    </>
  );
};
