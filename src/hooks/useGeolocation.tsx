import { useEffect, useState } from 'react';
import { findCityByCoordinates } from '../services/geocode';
import { UserLocation } from '../helpers/models';

export function useGeolocation() {
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<UserLocation>();

  const handleUserLocation = async ({ coords }: GeolocationPosition) => {
    const userLocation = await findCityByCoordinates(coords);

    if (userLocation) {
      setUserLocation({
        city: userLocation.city,
        state: userLocation.state,
        label: `${userLocation.city}, ${userLocation.state}`,
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleUserLocation, (_) => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  return { loading, userLocation };
}
