import React from 'react';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import fetch from 'jest-fetch-mock';
import { routerConfig } from 'src/routerConfig';
import { debug } from 'jest-preview';

const singleColorDataResolved = {
  data: {
    id: 1,
    name: 'test-1',
    year: 2000,
    color: '#98B2D1',
    pantone_value: '15-4020',
  },
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};

describe('Single color', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches and renders single color ', async () => {
    fetch.mockResponseOnce(JSON.stringify(singleColorDataResolved));

    const testRouter = createMemoryRouter(routerConfig, {
      initialEntries: ['/color/1'],
    });

    const { findByText } = render(<RouterProvider router={testRouter} />);
    await waitFor(async () => {
      const name = await findByText(/test-1/i);
      const year = await findByText(/2000/i);
      expect(name).toBeInTheDocument();
      expect(year).toBeInTheDocument();
      expect(fetch).toBeCalledTimes(1);
    });
  });

  it('displays error when there is no color with provided id', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    const testRouter = createMemoryRouter(routerConfig, { initialEntries: ['/color/101010'] });

    const { findByText, getByTestId } = render(<RouterProvider router={testRouter} />);

    expect(getByTestId('loading-spinner')).toBeInTheDocument();

    await waitFor(async () => {
      const error = await findByText(/Sorry, color with that id does not exist./i);
      expect(error).toBeInTheDocument();
      expect(fetch).toBeCalledTimes(1);
    });
  });

  it('opens modal with hidden color data', async () => {
    fetch.mockResponseOnce(JSON.stringify(singleColorDataResolved));
    const testRouter = createMemoryRouter(routerConfig, { initialEntries: ['/color/101010'] });

    const { findByTestId, getByTestId, findByText } = render(
      <RouterProvider router={testRouter} />
    );

    expect(getByTestId('loading-spinner')).toBeInTheDocument();

    const colorRows = await findByTestId(/table-row/i);
    fireEvent.click(colorRows);

    const hex = await findByText(/#98B2D1/i);
    const pantoneValue = await findByText(/15-4020/i);

    expect(hex).toBeInTheDocument();
    expect(pantoneValue).toBeInTheDocument();
    debug();

    expect(fetch).toBeCalledTimes(1);
  });
});
