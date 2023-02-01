import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { SingleColorResponse } from 'types/single-color-response';
import { ColorError } from '../Atoms/ColorError';
import { LinkButton } from '../Atoms/LinkButton';
import { Stack } from '@mui/system';
import { ColorTableWihHead } from '../Atoms/ColorTableWihHead';
import { ColorTableRow } from '../Atoms/ColorTableRow';
import { Box } from '@mui/material';

type LoaderData = {
  colorData: SingleColorResponse;
};

export const SingleColor = () => {
  const { colorData } = useLoaderData() as LoaderData;

  if (!Object.keys(colorData).length) return <ColorError />;

  const { id, color, year, name } = colorData.data;

  return (
    <Stack gap={2}>
      <ColorTableWihHead>
        <ColorTableRow color={color} name={name} year={year} id={id} />
      </ColorTableWihHead>
      <Box sx={{ position: 'absolute', inset: 'auto 1.5rem 1.5rem 1.5rem' }}>
        <LinkButton isBig toUrl="/colors/1">
          Back to colors list
        </LinkButton>
      </Box>
    </Stack>
  );
};
