import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { AppProvider } from './providers/AppProvider';
export const pageSize = 5;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Link to="/colors/1">Load colors</Link>,
  },
  {
    path: '/colors/:pageIndex',
    element: (
      <AppProvider>
        <Dashboard />
      </AppProvider>
    ),
    loader: async ({ params: { pageIndex } }) => {
      if (!pageIndex) return null;

      const response = await fetch(
        `https://reqres.in/api/products?page=${pageIndex}&per_page=${pageSize}`
      );
      const colorsData = await response.json();

      return {
        colorsData,
      };
    },
  },
  {
    path: '/color/:colorId',
    element: (
      <AppProvider>
        <Dashboard />
      </AppProvider>
    ),
    loader: async ({ params: { colorId } }) => {
      if (!colorId) return null;

      const response = await fetch(`https://reqres.in/api/products?id=${colorId}`);
      const data = await response.json();

      // Convert data to array with one object
      data.data = [data.data];

      return {
        colorsData: data,
      };
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
