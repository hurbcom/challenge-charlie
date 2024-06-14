import { useState, useCallback } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

interface GeolocationError {
  message: string;
}

interface GeolocationOptions {
  onSuccess?: (location: Location) => void;
  onError?: (error: GeolocationError) => void;
}

const useGeolocation = (options?: GeolocationOptions) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<GeolocationError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getGeolocation = useCallback(() => {
    if (!navigator.geolocation) {
      const error = { message: 'Geolocation is not supported by your browser' };
      setError(error);
      if (options?.onError) options.onError(error);
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(location);
        setLoading(false);
        if (options?.onSuccess) options.onSuccess(location);
      },
      (geoError) => {
        const error = { message: geoError.message };
        setError(error);
        setLoading(false);
        if (options?.onError) options.onError(error);
      }
    );
  }, [options]);

  return { location, error, loading, getGeolocation };
};

export default useGeolocation;
