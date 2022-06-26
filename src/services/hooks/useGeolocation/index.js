import { useEffect, useState } from 'react';
import { useReverseGeocoding } from '../index';

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    userCoordinates: { lat: undefined, lng: undefined },
    isLoad: false,
  });

  const onSuccess = location => {
    setLocation({
      userCoordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      isLoad: true,
    });
  };

  const onError = () => {
    console.error('Geolocalização não suportada');
    setLocation(state => ({
      ...state,
      isLoad: true,
    }));
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      onError();
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  const { userCoordinates, isLoad } = location;
  const { userLocation } = useReverseGeocoding(userCoordinates);

  return { userCoordinates, isLoad, userLocation };
};
