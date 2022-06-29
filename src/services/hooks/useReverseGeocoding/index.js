import axios from 'axios';
import { useQuery } from 'react-query';
import { formatUserLocation } from './utils/formatUserLocation';

export const useReverseGeocoding = userCoords => {
  const latitude = userCoords.lat;
  const longitude = userCoords.lng;

  const baseUrl = 'https://api.opencagedata.com/';
  const endpoint = `${baseUrl}geocode/v1/json?q=${latitude}+${longitude}&key=${
    process.env.REACT_APP_OPEN_CAGE_API_KEY ||
    process.env.REACT_APP_OPEN_CAGE_KEY
  }`;

  const { data } = useQuery(
    ['reverse-geocoding', userCoords],
    async () => {
      return await axios.get(endpoint);
    },
    { enabled: !!userCoords.lat && !!userCoords.lng },
  );

  const { userLocation } = formatUserLocation(data);
  return { userLocation };
};
