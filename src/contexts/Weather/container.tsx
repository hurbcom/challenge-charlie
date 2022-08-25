import React, { memo, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import services from 'services';
import { useLocation } from 'hooks';

import { IWeather, WeatherContextPayload } from './types';
import { WeatherProvider } from '.';

function WeatherContainer({ children }: PropsWithChildren): React.ReactElement {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<IWeather>();

  const { coords } = useLocation();

  const getWeather = useCallback(
    (location: string) => async () => {
      if (location) {
        setLoading(true);

        try {
          const data = await services.weather.getWeather(location);

          setWeather(data);

          setLoading(false);

          return;
        } catch (error) {
          setLoading(false);

          toast.error('Não encontramos o termo buscado');

          return error;
        }
      }
    },
    [],
  );

  const getForecast = useCallback(
    (latitude: number, longitude: number) => async () => {
      setLoading(true);

      try {
        const data = await services.weather.getForecast(latitude, longitude);

        setWeather(data);

        setLoading(false);

        return;
      } catch (error) {
        setLoading(false);

        toast.error('Não encontramos o termo buscado');

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
      loading,
    }),
    [getWeather, weather, loading],
  );

  return <WeatherProvider value={payload}>{children}</WeatherProvider>;
}

export default memo(WeatherContainer);
