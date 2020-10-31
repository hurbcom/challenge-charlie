import { useEffect, useState } from 'react';

export const useCurrentLocationData = () => {
  const [currentLocation, setCurrentLocation] = useState<Position>();
  const [error, setError] = useState<PositionError>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      loc => {
        setCurrentLocation(loc);
      },
      err => setError(err),
      { enableHighAccuracy: true },
    );
  }, []);

  return {
    currentLocation,
    error,
  };
};
