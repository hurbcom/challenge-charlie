import axios from 'axios';
import { useQuery } from 'react-query';

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

  const suburb = data?.data.results[0].components.suburb;
  const city = data?.data.results[0].components.city;
  const userLocation = suburb && city ? `${suburb}, ${city}` : undefined;

  return { userLocation };
};
