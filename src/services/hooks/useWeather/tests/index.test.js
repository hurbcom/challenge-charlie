import { setupServer } from 'msw/node';
import { waitFor, renderHook } from '@testing-library/react';
import { handlers, createWrapper } from './utils';
import { useWeatherData } from '../index';

jest.mock('../utils/formatData', () => ({
  __esModule: true,
  formatData: () => {
    return { weatherData: { weather: 'mock' } };
  },
}));

const server = setupServer(...handlers);

describe('useWeatherData', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const argsMock = {
    coords: {
      lat: '42163',
      lng: '31283',
    },
    setTemperature: jest.fn(),
  };

  it('should do something', async () => {
    const { result } = renderHook(
      () => useWeatherData(argsMock.coords, argsMock.setTemperature),
      { wrapper: createWrapper() },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.weatherData).toStrictEqual({ weather: 'mock' });
  });
});
