import { useEffect, useState } from 'react';
import { IWeatherDaily } from '../adapters/WeatherServiceAdapter';
import WeatherService from '../external/WeatherService';

interface IHookPayload {
  lat?: number | undefined;
  lon?: number | undefined;
  units: string;
  lang: string;
}

const useWeatherAPI = ({ lat, lon, units, lang }: IHookPayload) => {
  const [weatherResume, setWeatherResume] = useState<IWeatherDaily>();

  const getWeatherResume = async () => {
    const data = await new WeatherService().getWeatherResume({ lat, lon, units, lang });
    setWeatherResume(data);
  };

  useEffect(() => {
    if (!lat || !lon) return;
    getWeatherResume();
  }, [lat, lon]);

  return { weatherResume };
};

export default useWeatherAPI;
