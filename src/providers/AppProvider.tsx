import React, { ReactNode } from 'react';
import { ColorsDataProvider } from 'src/providers/ColorsProvider';
import { ModalProvider } from './ModalProvider';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <ColorsDataProvider>
      <ModalProvider>{children}</ModalProvider>
    </ColorsDataProvider>
  );
};
