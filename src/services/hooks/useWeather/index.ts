import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatData } from './helper';
import { IDailyWeatherData, IFormattedDailyWeather } from './interfaces';

interface Coordinates {
  latitude?: number;
  longitude?: number;
}

const OPEN_WEATHER_API_KEY = '772920597e4ec8f00de8d376dfb3f094';

export const useWeather = (data: string | Coordinates) => {
  if (typeof data !== 'string') {
    const { latitude, longitude } = data;
    return useGetWeather({ latitude, longitude });
  }
};

export const useGetWeather = ({ latitude, longitude }: Coordinates) => {
  const [dailyWeather, setDailyWeather] = useState<IFormattedDailyWeather[]>();
  const baseUrl = 'https://api.openweathermap.org/';
  const endpoint = `${baseUrl}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=3&units=metric&exclude=minutely,hourly&lang=pt_br&appid=${OPEN_WEATHER_API_KEY}`;

  useEffect(() => {
    const fetchDailyWeather = async () => {
      if (latitude && longitude) {
        const { data } = await axios.get<IDailyWeatherData>(endpoint);
        const { dailyWeather } = formatData(data);
        setDailyWeather(dailyWeather);
      }
    };
    fetchDailyWeather();
  }, [endpoint]);
  return dailyWeather;
};
