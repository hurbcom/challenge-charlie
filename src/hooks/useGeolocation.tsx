import { useCallback, useEffect, useState } from 'react';
import { findCityByCoordinates } from '../services/geocode';
import { UserLocation } from '../helpers/models';

export function useGeolocation() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState<UserLocation>();

  const handleError = useCallback(() => {
    setError(true);
    setLoading(false);
  }, []);

  const handleUserLocation = async ({ coords }: GeolocationPosition) => {
    try {
      const userLocation = await findCityByCoordinates(coords);

      if (userLocation) {
        setLocation({
          city: userLocation.city,
          state: userLocation.state,
        });
      }

      setLoading(false);
    } catch (_) {
      handleError();
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleUserLocation, handleError);
    } else {
      handleError();
    }
  }, []);

  return { loading, error, location };
}
