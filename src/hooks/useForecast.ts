import { useState, useCallback } from 'react';

interface ForecastError {
  message: string;
}

const useForecast = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<ForecastError | null>(null);

  const fetchForecast = useCallback(async (location: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/forecast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      const error = { message: (err as Error).message };
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, data, error, fetchForecast };
};

export default useForecast;
