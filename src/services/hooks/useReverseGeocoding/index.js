import axios from 'axios';
import { useQuery } from 'react-query';
import { formatUserLocation } from './utils/formatUserLocation';

export const useReverseGeocoding = userCoords => {
  const latitude = userCoords?.lat;
  const longitude = userCoords?.lng;
  let coordId = 'undefined coords';

  if (latitude && longitude) {
    coordId = latitude.toString() + longitude.toString();
  }

  const baseUrl = 'https://api.opencagedata.com/';
  const endpoint = `${baseUrl}geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}`;

  const { data } = useQuery(['reverse-geocoding', coordId], async () => {
    return await axios.get(endpoint);
  });

  const { userLocation } = formatUserLocation(data);
  return { userLocation };
};
