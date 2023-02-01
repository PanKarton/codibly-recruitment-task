import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from './providers/AppProvider';
import { Error } from './components/Molecules/Error';
import { SingleColor } from './components/Molecules/SingleColor';
import { DashboardTemplate } from './components/Templates/DashboardTemplate';
import { ColorsTable } from './components/Molecules/ColorsTable';
import { Home } from './components/Atoms/Home';

export const pageSize = 5;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    loader: async ({ params: { pageIndex } }) => {
      try {
        if (!pageIndex) return null;

        const response = await fetch(
          `https://reqres.in/api/products?page=${pageIndex}&per_page=${pageSize}`
        );
        const colorsData = await response.json();

        return {
          colorsData,
        };
      } catch (err) {
        console.log({ err });
      }
    },
    errorElement: <Error />,
  },
  {
    path: '/color/:colorId',
    element: (
      <DashboardTemplate>
        <SingleColor />
      </DashboardTemplate>
    ),
    loader: async ({ params: { colorId } }) => {
      try {
        if (!colorId) return null;

        const response = await fetch(`https://reqres.in/api/products?id=${colorId}`);
        const data = await response.json();

        return {
          colorData: data,
          colorId,
        };
      } catch (err) {
        console.log({ err });
      }
    },
    errorElement: <Error />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
