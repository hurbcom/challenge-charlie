import { useEffect, useState } from 'react';

import { getMetrictByTemperatureUnit } from '@helpers/getMetrictByTemperatureUnit';
import WeatherService from '@external/WeatherService';
import { IWeatherWeekly } from '@adapters/WeatherServiceAdapter';

import { TemperatureUnit } from '../global-types';

interface IUseWeatherAPIPayload {
  lat?: number | undefined;
  lon?: number | undefined;
  lang?: string;
  temperatureUnit: TemperatureUnit;
}

const useWeatherAPI = ({ lat, lon, temperatureUnit, lang }: IUseWeatherAPIPayload) => {
  const [weatherResume, setWeatherResume] = useState<IWeatherWeekly>();
  const [averageTemperature, setAverageTemperature] = useState<number>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const getWeatherResume = async () => {
    try {
      setLoading(true);
      const data = await new WeatherService().getWeatherResume({
        lat,
        lon,
        units: getMetrictByTemperatureUnit(temperatureUnit),
        lang,
      });
      setWeatherResume(data);

      const temperatureDays = data.days
        .map((day) => day.temperature)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

      setAverageTemperature((data.today.temperature + temperatureDays) / 3);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByLocationName = async ({ location }: { location: string }) => {
    const data = await new WeatherService().getWeatherByLocationName({ location });
    return data;
  };

  useEffect(() => {
    if (!lat || !lon) return;
    getWeatherResume();
  }, [lat, lon, temperatureUnit]);

  return { weatherResume, averageTemperature, getWeatherByLocationName, isLoading };
};

export default useWeatherAPI;
