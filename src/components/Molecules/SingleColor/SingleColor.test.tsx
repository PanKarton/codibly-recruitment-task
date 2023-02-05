import React from 'react';
import '@testing-library/jest-dom';
import { RouterProvider } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
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
    {
      id: 2,
      name: 'second-test-color',
      year: 3000,
      color: '#404040',
      pantone_value: '56-7890',
    },
  ],
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};
const singleColorResponseResolved = {
  data: {
    id: 3,
    name: 'single-color-test',
    year: 9999,
    color: '#C74375',
    pantone_value: '66-666',
  },
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};

describe('Colors table', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders single color after input change and opens modal ', async () => {
    fetch
      .mockResponseOnce(JSON.stringify(colorsArrayResolved))
      .mockResponseOnce(JSON.stringify(singleColorResponseResolved));

    const { getByLabelText, findByText, findByTestId, getByText } = render(
      <RouterProvider router={router} />
    );

    await waitFor(async () => {
      const input = getByLabelText(/search/i);

      fireEvent.change(input, { target: { value: 5 } });

      const name = await findByText(/single-color-test/i);
      const year = await findByText(/9999/i);

      expect(name).toBeInTheDocument();
      expect(year).toBeInTheDocument();

      const colorRow = await findByTestId(/color-row/i);
      fireEvent.click(colorRow);

      const hex = getByText(/#C74375/i);
      const pantoneValue = getByText(/66-666/i);

      expect(hex).toBeInTheDocument();
      expect(pantoneValue).toBeInTheDocument();

      expect(fetch).toBeCalledTimes(2);
    });
  });
});
