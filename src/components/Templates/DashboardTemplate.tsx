import React, { ReactNode } from 'react';
import { NumberInput } from '../Atoms/NumberInput';

type Props = {
  children: ReactNode;
};

export const DashboardTemplate = ({ children }: Props) => {
  return (
    <main>
      <NumberInput />
      {children}
    </main>
  );
};
