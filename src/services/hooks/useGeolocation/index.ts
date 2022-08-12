import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatUserLocation } from './helper';
import { GeolocationCoordinates } from './interfaces';

const OPEN_CAGE_API_KEY = 'c63386b4f77e46de817bdf94f552cddf';

export const useGeolocation = () => {
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
    console.error('Geolocalização não suportadaa');
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
  const { latitude, longitude } = location.coords;
  const { userLocation } = useGetUserLocation(location);

  return { userLocation, latitude, longitude };
};

export const useGetUserLocation = (userData: GeolocationCoordinates) => {
  const [userLocation, setUserLocation] = useState<string>();
  const { latitude, longitude } = userData.coords;

  const baseUrl = 'https://api.opencagedata.com/';
  const endpoint = `${baseUrl}geocode/v1/json?q=${latitude}+${longitude}&key=${OPEN_CAGE_API_KEY}`;

  useEffect(() => {
    const fetchuserLocation = async () => {
      if (!latitude || !longitude) {
        setUserLocation('');
      } else {
        const data = await axios.get(endpoint);
        const { userLocation } = formatUserLocation(data);
        setUserLocation(userLocation);
      }
    };

    fetchuserLocation();
  }, [endpoint]);

  return { userLocation };
};
