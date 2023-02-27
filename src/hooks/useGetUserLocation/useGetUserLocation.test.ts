import React from 'react';
import { renderHook } from '@testing-library/react';

import { Location } from '~/@types';

import { useGetUserLocation } from '.';

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
    const { result } = renderHook(() =>
      useGetUserLocation({
        currentManualLocation: '',
        setCurrentManualLocation: mockSetManualLocation,
      }),
    );

    const { location } = result.current;

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
        elementToFocus: refMock as React.RefObject<HTMLInputElement>,
        currentManualLocation: '',
        setCurrentManualLocation: jest.fn(),
      }),
    );

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
    expect(mockFocus).toHaveBeenCalled();
  });
});
