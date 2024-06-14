import { renderHook, act } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import useForecast from '@/hooks/useForecast';

describe('useForecast', () => {
  const forecastResponse = { data: 'mock forecast data' };

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(forecastResponse),
    } as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useForecast());

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
  });

  it('should fetch forecast data successfully', async () => {
    const { result } = renderHook(() => useForecast());

    await act(async () => {
      await result.current.fetchForecast('New York');
    });

    await waitFor(() => {
      expect(result.current.data).toBe(forecastResponse);
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/forecast', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location: 'New York' }),
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should handle fetch forecast data error', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch weather data'));

    const { result } = renderHook(() => useForecast());

    await act(async () => {
      try {
        await result.current.fetchForecast('New York');
      } catch {}
    });

    await waitFor(() => {
      expect(result.current.error).toEqual({ message: 'Failed to fetch weather data' });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
  });
});
