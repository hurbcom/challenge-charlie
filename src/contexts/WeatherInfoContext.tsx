import React, { createContext, type ReactNode, useState, useEffect, useContext } from 'react';

import getCurrentWeatherData from '@services/getCurrentWeatherData';
import useNavigatorGeoLocation from '@hooks/useNavigatorGeoLocation';
import type { WeatherDataInterface } from '@interfaces/WeatherDataInterface';

import { GeoLocationContext } from './GeoLocationContext';
interface WeatherInfoProviderProps {
  children: ReactNode;
}

interface WeatherInfoContextData {
  weatherInfo: WeatherDataInterface;
  setWeatherInfo: React.Dispatch<React.SetStateAction<WeatherDataInterface>>;
}

export const WeatherInfoContext = createContext<WeatherInfoContextData>({} as WeatherInfoContextData);

export function WeatherInfoProvider({ children }: WeatherInfoProviderProps) {
  const [weatherInfo, setWeatherInfo] = useState<WeatherDataInterface>({} as WeatherDataInterface);

  const { geoLocation } = useContext(GeoLocationContext);

  const { allowLocation } = useNavigatorGeoLocation();

  async function handleGetCurrentWeatherData(): Promise<void> {
    setWeatherInfo({ ...weatherInfo, loading: true });
    const response = await getCurrentWeatherData({
      latitude: geoLocation.latitude,
      longitude: geoLocation.longitude
    });

    if (response) setWeatherInfo({ loading: false, current: response.current, daily: response.daily });
  }

  useEffect(() => {
    handleGetCurrentWeatherData();
  }, [allowLocation, geoLocation.latitude, geoLocation.longitude]);

  return <WeatherInfoContext.Provider value={{ weatherInfo, setWeatherInfo }}>{children}</WeatherInfoContext.Provider>;
}
