import { Stack } from '@mui/system';
import React, { ReactNode } from 'react';
import { ContentWrapper } from 'src/components/Atoms/ContentWrapper';
import { NumberInput } from '../Atoms/NumberInput';

type Props = {
  children: ReactNode;
};

export const DashboardTemplate = ({ children }: Props) => {
  return (
    <main>
      <ContentWrapper>
        <Stack spacing={2}>
          <NumberInput />
          {children}
        </Stack>
      </ContentWrapper>
    </main>
  );
};
