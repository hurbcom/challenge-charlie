import React, { memo, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import services from 'services';
import { useLocation } from 'hooks';

import { IWeather, WeatherContextPayload } from './types';
import { WeatherProvider } from '.';

function WeatherContainer({ children }: PropsWithChildren): React.ReactElement {
  const [weather, setWeather] = useState<IWeather>();

  const { coords } = useLocation();

  const getWeather = useCallback(
    (location: string) => async () => {
      if (location) {
        try {
          const data = await services.weather.getWeather(location);

          setWeather(data);
          return;
        } catch (error) {
          return error;
        }
      }
    },
    [],
  );

  const getForecast = useCallback(
    (latitude: number, longitude: number) => async () => {
      try {
        const data = await services.weather.getForecast(latitude, longitude);

        setWeather(data);

        return;
      } catch (error) {
        return error;
      }
    },
    [],
  );

  useEffect(() => {
    if (coords) {
      getForecast(coords?.latitude, coords?.longitude)();
    }
  }, [coords, getForecast]);

  const payload = useMemo<WeatherContextPayload>(
    () => ({
      getWeather,
      current: weather?.current,
      otherDays: weather?.otherDays,
      name: weather?.name,
    }),
    [getWeather, weather],
  );

  return <WeatherProvider value={payload}>{children}</WeatherProvider>;
}

export default memo(WeatherContainer);
