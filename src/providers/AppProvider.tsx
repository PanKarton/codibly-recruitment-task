import React, { ReactNode } from 'react';
import { ColorsDataProvider } from './ColorsProvider';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => (
  <ColorsDataProvider>{children}</ColorsDataProvider>
);
