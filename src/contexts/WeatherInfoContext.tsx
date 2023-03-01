import React, {
  createContext,
  type ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';

import { GeoLocationContext } from './GeoLocationContext';
import getCurrentWeatherData from '../services/getCurrentWeatherData';
import useNavigatorGeoLocation from '../hooks/useNavigatorGeoLocation';
import type { WeatherDataInterface } from '../interfaces/WeatherDataInterface';
import { add } from 'date-fns';

interface WeatherInfoProviderProps {
  children: ReactNode;
}

interface WeatherInfoContextData {
  weatherInfo: WeatherDataInterface;
  setWeatherInfo: React.Dispatch<React.SetStateAction<WeatherDataInterface>>;
}

export const WeatherInfoContext = createContext<WeatherInfoContextData>(
  {} as WeatherInfoContextData,
);

export function WeatherInfoProvider({ children }: WeatherInfoProviderProps) {
  const [weatherInfo, setWeatherInfo] = useState<WeatherDataInterface>(
    {} as WeatherDataInterface,
  );

  const { geoLocation } = useContext(GeoLocationContext);

  const { allowLocation } = useNavigatorGeoLocation();

  async function handleGetCurrentWeatherData(): Promise<void> {
    // console.log(`Home - latitude`, geoLocation.latitude);
    // console.log(`Home - longitude`, geoLocation.longitude);

    const response = await getCurrentWeatherData({
      latitude: geoLocation.latitude,
      longitude: geoLocation.longitude,
    });

    console.log('WeatherInfoProvider', response);
    if (response) setWeatherInfo(response);
  }

  useEffect(() => {
    // console.log('entrou', allowLocation);
    if (allowLocation) {
      handleGetCurrentWeatherData();
    }
  }, [allowLocation]);

  useEffect(() => {
    console.log('weatherInfo', weatherInfo);
  }, [weatherInfo]);

  return (
    <WeatherInfoContext.Provider value={{ weatherInfo, setWeatherInfo }}>
      {children}
    </WeatherInfoContext.Provider>
  );
}
