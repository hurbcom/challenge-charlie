import { useEffect, useState } from 'react';

export const GeoLocation = () => {
  const [error, setError] = useState<PositionError>();
  const [geoLocation, setGeoLocation] = useState<Position>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => setGeoLocation(location),
      (err) => setError(err),
      { enableHighAccuracy: true }
    );
  }, []);

  return {
    error,
    geoLocation
  };
};
