import React from 'react';
import '@testing-library/jest-dom';
import { RouterProvider } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { router } from 'src/routerConfig';
import fetch from 'jest-fetch-mock';

const colorsArrayResolved = {
  page: 1,
  per_page: 1,
  total: 12,
  total_pages: 12,
  data: [
    {
      id: 1,
      name: 'test-color',
      year: 2000,
      color: '#303030',
      pantone_value: '12-1234',
    },
  ],
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};
const colorsArraySecondPageResolved = {
  page: 2,
  per_page: 1,
  total: 12,
  total_pages: 12,
  data: [
    {
      id: 1,
      name: 'second-test-color',
      year: 3000,
      color: '#303030',
      pantone_value: '56-7890',
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

    const { findByText } = render(<RouterProvider router={router} />);

    await waitFor(async () => {
      const name = await findByText(/test-color/i);
      const year = await findByText(/2000/i);
      expect(name).toBeInTheDocument();
      expect(year).toBeInTheDocument();
      expect(fetch).toBeCalledTimes(1);
    });
  });

  it('fetches and renders message when colors array is empty', async () => {
    fetch.mockResponseOnce(JSON.stringify(colorsArrayEmpty));
    const { findByText } = render(<RouterProvider router={router} />);

    await waitFor(async () => {
      const error = await findByText(/Sorry, there are no colors avaliable to display yet./i);
      expect(error).toBeInTheDocument();
      expect(fetch).toBeCalledTimes(1);
    });
  });

  it('fetches and renders next page of colors after clicking pagination button', async () => {
    fetch
      .mockResponseOnce(JSON.stringify(colorsArrayResolved))
      .mockResponseOnce(JSON.stringify(colorsArraySecondPageResolved));
    const { findByText, getByTestId } = render(<RouterProvider router={router} />);

    await waitFor(async () => {
      const name = await findByText(/test-color/i);
      const year = await findByText(/2000/i);
      expect(name).toBeInTheDocument();
      expect(year).toBeInTheDocument();

      const btn = getByTestId('ArrowForwardIosIcon');

      fireEvent.click(btn);

      const secondName = await findByText(/second-test-color/i);
      const secondYear = await findByText(/3000/i);
      expect(secondName).toBeInTheDocument();
      expect(secondYear).toBeInTheDocument();

      expect(fetch).toBeCalledTimes(2);
    });
  });

  it('displays modal with all color properties after click on table row', async () => {
    fetch.mockResponseOnce(JSON.stringify(colorsArrayResolved));
    const { getByText, findByTestId } = render(<RouterProvider router={router} />);

    await waitFor(async () => {
      const colorRow = await findByTestId(/color-row/i);
      fireEvent.click(colorRow);

      const hex = getByText(/#303030/i);
      const pantoneValue = getByText(/12-1234/i);

      expect(hex).toBeInTheDocument();
      expect(pantoneValue).toBeInTheDocument();

      expect(fetch).toBeCalledTimes(1);
    });
  });
});
