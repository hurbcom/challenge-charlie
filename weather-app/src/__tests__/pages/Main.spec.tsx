import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';
import Main from '../../pages/Main';

fetchMock.enableMocks();

jest.mock('../../hooks/geolocation', () => {
  return {
    useGeolocation: () => ({
      coords: {
        latitude: -22.4854016,
        longitude: -44.0762368,
      },
    }),
  };
});

const openCageData = JSON.stringify({
  results: [
    {
      components: {
        city: 'Volta Redonda',
        state: 'Rio de Janeiro',
      },
      geometry: {
        lat: -22.4854016,
        lng: -44.0762368,
      },
    },
  ],
});

beforeEach(() => {
  fetchMock.doMockIf(/opencagedata/, openCageData);
});

describe('Main Page', () => {
  it('should display an error when has no location permission', () => {
    const { getByText } = render(<Main />);

    expect(getByText('Ops!')).toBeTruthy();
  });

  it('should be able to search for a new location', async () => {
    const { getByPlaceholderText, getByTestId } = render(<Main />);

    const locationField = getByPlaceholderText(
      'Digite aqui sua localização',
    ) as HTMLInputElement;
    const form = getByTestId('form');

    await act(async () => {
      fireEvent.change(locationField, { target: { value: 'Volta Redonda' } });
      fireEvent.submit(form);
    });

    expect(locationField.value).toBe('Volta Redonda, Rio de Janeiro');
  });
});
