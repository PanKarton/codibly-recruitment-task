import React, { ReactNode } from 'react';
import { ColorsDataProvider } from 'src/providers/ColorsProvider';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return <ColorsDataProvider>{children}</ColorsDataProvider>;
};
