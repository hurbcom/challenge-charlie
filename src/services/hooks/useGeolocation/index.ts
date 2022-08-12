import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatUserLocation } from './helper';
import { GeolocationCoordinates } from './interfaces';

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
  const { userLocation } = useGetUserAddress(location);

  return { userLocation, latitude, longitude };
};

export const useGetUserAddress = (userData: GeolocationCoordinates) => {
  const [userLocation, setUserLocation] = useState<string>();
  const { latitude, longitude } = userData.coords;

  const baseUrl = 'https://api.opencagedata.com/';
  const endpoint = `${baseUrl}geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}`;

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

export const getCoordinates = async (address: string) => {
  const baseUrl = 'https://api.opencagedata.com/';
  const endpoint = `${baseUrl}geocode/v1/json?q=${address}&key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}&pretty=1`;

  const { data } = await axios.get(endpoint);
  const latitude = data.results[0].geometry.lat;
  const longitude = data.results[0].geometry.lng;

  return { latitude, longitude };
};
