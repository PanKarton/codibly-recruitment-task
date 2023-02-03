import React from 'react';
import { Box, Dialog, Paper, Typography } from '@mui/material';
import { useModal } from 'src/providers/ModalProvider';
import { capitalizeFirstLetter } from 'src/helpers/capitalizeFirstLetter';
import fontColorContrast from 'font-color-contrast';

export const ColorModal = () => {
  const { isOpen, colorData, handleCloseModal } = useModal();

  if (colorData === null) return null;

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Paper elevation={3} sx={{ minHeight: '30rem', width: 'min(80vw, 25rem)' }}>
          <Box
            sx={{
              backgroundColor: colorData.color,
              padding: '0.75rem 1rem',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <Typography
              variant="body1"
              fontSize="3rem"
              sx={{ color: fontColorContrast(colorData.color) }}
            >
              {colorData.color}
            </Typography>
          </Box>
          <Box
            sx={{
              paddingInline: ' 1rem',
              paddingBlock: ' 1rem 3rem',
            }}
          >
            <Typography variant="h1" sx={{ color: '#303030', fontSize: '2.5rem' }}>
              {`${capitalizeFirstLetter(colorData.name)} #${colorData.id}`}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: '#303030', fontSize: '1.5rem', lineHeight: '2rem' }}
            >
              {`year: ${colorData.year}`}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: '#303030', fontSize: '1.5rem', lineHeight: '2rem' }}
            >
              {`${colorData.pantone_value}`}
            </Typography>
          </Box>
        </Paper>
      </Dialog>
    </div>
  );
};
