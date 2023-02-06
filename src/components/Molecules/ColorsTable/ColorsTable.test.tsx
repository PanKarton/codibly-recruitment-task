import React from 'react';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import fetch from 'jest-fetch-mock';
import { routerConfig } from 'src/routerConfig';

const colorsArrayResolved = {
  page: 1,
  per_page: 5,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 1,
      name: 'test-1',
      year: 2000,
      color: '#98B2D1',
      pantone_value: '15-4020',
    },
    {
      id: 2,
      name: 'test-2',
      year: 2001,
      color: '#C74375',
      pantone_value: '17-2031',
    },
    {
      id: 3,
      name: 'test-3',
      year: 2002,
      color: '#BF1932',
      pantone_value: '19-1664',
    },
    {
      id: 4,
      name: 'test-4',
      year: 2003,
      color: '#7BC4C4',
      pantone_value: '14-4811',
    },
    {
      id: 5,
      name: 'test-5',
      year: 2004,
      color: '#E2583E',
      pantone_value: '17-1456',
    },
  ],
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};

const colorsArrayEmpty = {
  page: 1,
  per_page: 2,
  total: 12,
  total_pages: 2,
  data: [],
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};

describe('Colors table', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches and renders color list', async () => {
    fetch.mockResponseOnce(JSON.stringify(colorsArrayResolved));

    const testRouter = createMemoryRouter(routerConfig);

    const { findByText } = render(<RouterProvider router={testRouter} />);

    await waitFor(async () => {
      const name = await findByText(/test-1/i);
      const year = await findByText(/2000/i);
      expect(name).toBeInTheDocument();
      expect(year).toBeInTheDocument();
      expect(fetch).toBeCalledTimes(1);
    });
  });

  it('fetches and renders message when colors array is empty', async () => {
    fetch.mockResponseOnce(JSON.stringify(colorsArrayEmpty));
    const testRouter = createMemoryRouter(routerConfig);

    const { findByText } = render(<RouterProvider router={testRouter} />);

    await waitFor(async () => {
      const error = await findByText(/Sorry, there are no colors avaliable to display yet./i);
      expect(error).toBeInTheDocument();
      expect(fetch).toBeCalledTimes(1);
    });
  });

  it('fetches and renders message when colors array is empty', async () => {
    fetch.mockResponseOnce(JSON.stringify(colorsArrayEmpty));
    const testRouter = createMemoryRouter(routerConfig, {
      initialEntries: ['/colors/1'],
    });

    const { findByText } = render(<RouterProvider router={testRouter} />);

    await waitFor(async () => {
      const error = await findByText(/Sorry, there are no colors avaliable to display yet./i);
      expect(error).toBeInTheDocument();
      expect(fetch).toBeCalledTimes(1);
    });
  });

  it('displays modal with all color properties after click on table row and closes it ', async () => {
    fetch.mockResponseOnce(JSON.stringify(colorsArrayResolved));

    const testRouter = createMemoryRouter(routerConfig);

    const { findAllByTestId, findByText, getByTestId } = render(
      <RouterProvider router={testRouter} />
    );

    expect(getByTestId('loading-spinner')).toBeInTheDocument();

    const colorRows = await findAllByTestId(/table-row/i);
    fireEvent.click(colorRows[0]);

    const hex = await findByText(/#98B2D1/i);
    const pantoneValue = await findByText(/15-4020/i);

    expect(hex).toBeInTheDocument();
    expect(pantoneValue).toBeInTheDocument();

    expect(fetch).toBeCalledTimes(1);
  });
});
