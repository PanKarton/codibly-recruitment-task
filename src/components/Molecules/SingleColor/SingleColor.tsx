import React from 'react';
import { ColorError } from '../../Atoms/ColorError';
import { LinkButton } from '../../Atoms/LinkButton';
import { Stack } from '@mui/system';
import { ColorTableWihHead } from '../../Atoms/ColorTableWihHead';
import { ColorTableRow } from '../../Atoms/ColorTableRow';
import { Box } from '@mui/material';
import { useModal } from 'src/providers/ModalProvider';
import { ColorModal } from '../../Atoms/ColorModal';
import { useSingleColor } from './useSingleColors';
import { LoadingSpinner } from '../../Atoms/LoadingSpinner';

export const SingleColor = () => {
  const { isLoading, colorData } = useSingleColor();
  const { handleOpenModal } = useModal();

  if (!colorData || isLoading) return <LoadingSpinner />;

  if (colorData === null || !Object.keys(colorData).length) return <ColorError />;

  const { id, color, year, name } = colorData.data;

  return (
    <>
      <Stack gap={2}>
        <ColorTableWihHead>
          <ColorTableRow
            color={color}
            name={name}
            year={year}
            id={id}
            onClick={() => handleOpenModal(colorData.data)}
          />
        </ColorTableWihHead>
        <Box sx={{ position: 'absolute', inset: 'auto 1.5rem 1.5rem 1.5rem' }}>
          <LinkButton isBig toUrl="/colors/1">
            Back to colors list
          </LinkButton>
        </Box>
      </Stack>
      <ColorModal />
    </>
  );
};
