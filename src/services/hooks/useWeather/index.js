import axios from 'axios';
import { useQuery } from 'react-query';
import { formatData } from './utils/formatData';

export const useWeatherData = coord => {
  const latitude = coord.lat ?? 0;
  const longitude = coord.lng ?? 0;
  const queryKey = latitude.toString() + longitude.toString();

  const baseUrl = 'https://api.openweathermap.org/';
  const endpoint = `${baseUrl}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  const { data, isLoading } = useQuery(['lat-lng', queryKey], async () => {
    return await axios.get(endpoint);
  });

  const { weatherData } = formatData(data);

  return { weatherData, isLoading };
};
