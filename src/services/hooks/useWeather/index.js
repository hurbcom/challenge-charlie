import axios from 'axios';
import { useQuery } from 'react-query';
import { formatData } from './utils/formatData';

export const useWeatherData = (coords, setTemperature) => {
  const latitude = coords.lat;
  const longitude = coords.lng;

  const baseUrl = 'https://api.openweathermap.org/';
  const endpoint = `${baseUrl}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  const { data, isLoading, isError, isSuccess } = useQuery(
    ['lat-lng', coords],
    async () => {
      return await axios.get(endpoint);
    },
    {
      enabled: !!coords.lat && !!coords.lng,
      onSuccess: data => {
        setTemperature(data.data.current.temp.toFixed(0));
      },
    },
  );

  const { weatherData } = formatData(data, isError);
  return { weatherData, isLoading, isError, isSuccess };
};
