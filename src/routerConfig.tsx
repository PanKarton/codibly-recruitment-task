import React from 'react';
import { AppProvider } from './providers/AppProvider';
import { DashboardTemplate } from './components/Templates/DashboardTemplate';
import { ColorsTable } from './components/Molecules/ColorsTable/ColorsTable';
import { PageNotFoundMessage } from './components/Atoms/PageNotFoundMessage';
import { ModalProvider } from './providers/ModalProvider';
import { SingleColor } from './components/Molecules/SingleColor/SingleColor';
import { Navigate } from 'react-router-dom';

export const routerConfig = [
  {
    path: '/',
    element: <Navigate to="/colors/1" replace={true} />,
  },
  {
    path: '/colors/:pageIndex',
    element: (
      <AppProvider>
        <DashboardTemplate>
          <ColorsTable />
        </DashboardTemplate>
      </AppProvider>
    ),
  },
  {
    path: '/color/:colorId',
    element: (
      <ModalProvider>
        <DashboardTemplate>
          <SingleColor />
        </DashboardTemplate>
      </ModalProvider>
    ),
  },
  {
    path: '*',
    element: <PageNotFoundMessage />,
  },
];
