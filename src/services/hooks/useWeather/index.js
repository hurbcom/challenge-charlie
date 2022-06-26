import axios from 'axios';
import { useQuery } from 'react-query';
import { formatData } from './utils/formatData';

export const useWeatherData = coords => {
  const latitude = coords.lat;
  const longitude = coords.lng;
  let coordId = 'undefined coords';

  if (latitude && longitude) {
    coordId = latitude.toString() + longitude.toString();
  }

  const baseUrl = 'https://api.openweathermap.org/';
  const endpoint = `${baseUrl}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  const { data, isLoading, isError } = useQuery(
    ['lat-lng', coordId],
    async () => {
      return await axios.get(endpoint);
    },
  );

  const { weatherData } = formatData(data, isError);
  return { weatherData, isLoading, isError };
};
