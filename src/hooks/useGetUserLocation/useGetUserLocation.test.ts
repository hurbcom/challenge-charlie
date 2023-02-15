import React from 'react';
import { renderHook } from '@testing-library/react';

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

describe('hooks - useGetUserLocation', () => {
  beforeAll(() => {
    customGlobal.navigator.geolocation = mockGeolocation;

    jest.spyOn(React, 'createRef').mockImplementation(() => ({
      current: {
        focus: mockFocus,
      },
    }));
  });

  it('should return the coordinates correctly', () => {
    const { result } = renderHook(useGetUserLocation);

    const { coordinates } = result.current;

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();

    expect(coordinates).toStrictEqual({ coords });
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

    renderHook(() => useGetUserLocation(refMock as React.RefObject<HTMLInputElement>));

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
    expect(mockFocus).toHaveBeenCalled();
  });
});
