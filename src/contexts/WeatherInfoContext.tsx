import React, {
  createContext,
  type ReactNode,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';

import { GeoLocationContext } from './GeoLocationContext';
import getCurrentWeatherData from '../services/getCurrentWeatherData';
import useNavigatorGeoLocation from '../hooks/useNavigatorGeoLocation';
import type { WeatherDataInterface } from '../interfaces/WeatherDataInterface';
import { add, parseISO } from 'date-fns';

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
    console.log('entrou', allowLocation);

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
    const teste = updateWeatherDailyTemperature();
    console.log(`teste`, teste);
  }, []);

  useEffect(() => {
    console.log(`weatherInfo`, weatherInfo);
  }, [weatherInfo]);

  // Unix, UTC

  const updateWeatherDailyTemperature = useCallback(() => {
    if (weatherInfo && weatherInfo.daily) {
      const { daily } = weatherInfo;

      const nextDaysList = daily.reduce((nextDaysList, item) => {
        const currentDate = new Date(weatherInfo.current?.dt * 1000);
        const dateByDailyListItem = new Date(item.dt * 1000);

        const tomorrow = add(currentDate, {
          days: 1,
        });

        const afterTomorrow = add(currentDate, {
          days: 2,
        });

        if (dateByDailyListItem.getDay() === tomorrow.getDay()) {
          setWeatherInfo({ ...weatherInfo, tomorrowTempWeather: item });
        }

        if (dateByDailyListItem.getDay() === afterTomorrow.getDay()) {
          setWeatherInfo({
            ...weatherInfo,
            afterTomorrowTempWeather: item,
          });
        }
      });

      return nextDaysList;

      // setWeatherInfo({});
    }
  }, [weatherInfo]);

  return (
    <WeatherInfoContext.Provider value={{ weatherInfo, setWeatherInfo }}>
      {children}
    </WeatherInfoContext.Provider>
  );
}
