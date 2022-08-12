import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatUserLocation } from './helper';
import { GeolocationCoordinates } from './interfaces';

const OPEN_CAGE_API_KEY = 'c63386b4f77e46de817bdf94f552cddf';

export const getUserLocation = async (userData: GeolocationCoordinates) => {
  const { latitude, longitude } = userData.coords;

  const baseUrl = 'https://api.opencagedata.com/';
  const endpoint = `${baseUrl}geocode/v1/json?q=${latitude}+${longitude}&key=${OPEN_CAGE_API_KEY}`;

  const data = await axios.get(endpoint);

  const { userLocation } = formatUserLocation(data);
  return { userLocation };
};

export const useGeolocation = async () => {
  const [location, setLocation] = useState<GeolocationCoordinates>({
    coords: {
      latitude: undefined,
      longitude: undefined,
    },
  });

  const onSuccess = (location: GeolocationCoordinates) => {
    setLocation(location);
  };

  const onError = () => {
    console.error('Geolocalização não suportada');
    setLocation({
      coords: {
        latitude: undefined,
        longitude: undefined,
      },
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      onError();
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  const { userLocation } = await getUserLocation(location);

  return { userLocation };
};
