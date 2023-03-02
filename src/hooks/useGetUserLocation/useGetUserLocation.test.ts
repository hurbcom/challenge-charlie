import React from 'react';
import { renderHook } from '@testing-library/react';

import { Location } from '~/@types';

import { useGetUserLocation, UseGetUserLocationProps } from '.';

type CustomGlobal = {
  navigator: {
    geolocation: {
      getCurrentPosition: () => void;
    };
  };
};

const customGlobal = global as unknown as CustomGlobal;

const coords = {
  latitude: -22.59296,
  longitude: -49.0673792,
};

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementation((success) =>
    Promise.resolve(
      success({
        coords,
      }),
    ),
  ),
};

const mockFocus = jest.fn();
const mockSetManualLocation = jest.fn();

const defaultValues: UseGetUserLocationProps = {
  isLoading: false,
  setIsLoading: jest.fn,
  setWithError: jest.fn,
  currentManualLocation: '',
  setWeatherForecast: jest.fn,
  setCurrentManualLocation: jest.fn,
};

describe('hooks - useGetUserLocation', () => {
  beforeAll(() => {
    customGlobal.navigator.geolocation = mockGeolocation;

    jest.spyOn(React, 'createRef').mockImplementation(() => ({
      current: {
        focus: mockFocus,
      },
    }));
  });

  beforeAll(() => {
    const response: Location[] = [
      {
        latitude: -22.59296,
        longitude: -49.0673792,
        city: 'Itapetininga',
        state: 'São Paulo',
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(response),
      }),
    ) as jest.Mock;
  });

  it('should return the location correctly', () => {
    renderHook(() =>
      useGetUserLocation({
        ...defaultValues,
        setCurrentManualLocation: mockSetManualLocation,
      }),
    );

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
  });

  it('should focus on element when gets an error', () => {
    global.navigator.geolocation.getCurrentPosition = jest
      .fn()
      .mockImplementation((_, error) => Promise.resolve(error()));

    const refMock: React.RefObject<{ focus(): void }> = {
      current: {
        focus: mockFocus,
      },
    };

    renderHook(() =>
      useGetUserLocation({
        ...defaultValues,
        elementToFocus: refMock as React.RefObject<HTMLInputElement>,
      }),
    );

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
    expect(mockFocus).toHaveBeenCalled();
  });
});
