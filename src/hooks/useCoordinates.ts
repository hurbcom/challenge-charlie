import { useState, useCallback } from 'react';
import useGeolocation from '@/hooks/useGeolocation';

interface CoordinatesError {
  message: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface UseCoordinatesProps {
  onSuccess?: (city: string) => void;
  onError?: (error: CoordinatesError) => void;
}

const useCoordinates = (config?: UseCoordinatesProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string | null>(null);

  const { loading: loadingGeo, getGeolocation } = useGeolocation({
    onSuccess: (location) => {
      getCityName(location);
    },
    onError: (error) => {
      if (config?.onError) {
        config.onError({ message: error.message });
      }
    },
  });

  const getCityName = useCallback(
    async (coordinates: Coordinates) => {
      try {
        setLoading(true);
        const data = await fetch('/api/coordinates', {
          method: 'POST',
          body: JSON.stringify({ latitude: String(coordinates.latitude), longitude: String(coordinates.longitude) }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const res = await data.json();
        setCity(res.city);
        if (config?.onSuccess) {
          config.onSuccess(res.city);
        }
      } catch (err) {
        if (config?.onError) {
          config.onError({ message: 'Failed to fetch city name' });
        }
      } finally {
        setLoading(false);
      }
    },
    [config]
  );

  return { loading: loading || loadingGeo, city, fetchCity: getGeolocation };
};

export default useCoordinates;
