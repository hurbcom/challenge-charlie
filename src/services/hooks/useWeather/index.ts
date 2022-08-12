import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatData } from './helper';
import { IDailyWeatherData, IFormattedDailyWeather } from './interfaces';

interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export const useWeather = (
  data: string | Coordinates,
  setWeather: (value: IFormattedDailyWeather[]) => void,
) => {
  if (typeof data !== 'string') {
    const { latitude, longitude } = data;
    return useGetWeather({ latitude, longitude }, setWeather);
  }
};

export const useGetWeather = (
  { latitude, longitude }: Coordinates,
  setWeather: (value: IFormattedDailyWeather[]) => void,
) => {
  const [dailyWeather, setDailyWeather] = useState<IFormattedDailyWeather[]>();
  const baseUrl = 'https://api.openweathermap.org/';
  const endpoint = `${baseUrl}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=3&units=metric&exclude=minutely,hourly&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  useEffect(() => {
    const fetchDailyWeather = async () => {
      if (latitude && longitude) {
        const { data } = await axios.get<IDailyWeatherData>(endpoint);
        const { dailyWeather } = formatData(data);
        setDailyWeather(dailyWeather);
        setWeather(dailyWeather);
      }
    };
    fetchDailyWeather();
  }, [endpoint]);
  return dailyWeather;
};

export const getWeather = async ({ latitude, longitude }: Coordinates) => {
  const baseUrl = 'https://api.openweathermap.org/';
  const endpoint = `${baseUrl}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=3&units=metric&exclude=minutely,hourly&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  const { data } = await axios.get<IDailyWeatherData>(endpoint);
  const { dailyWeather } = formatData(data);

  return dailyWeather;
};
