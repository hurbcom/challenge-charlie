import { memo, useCallback, useEffect, useState } from 'react';

import env from 'react-dotenv';
import ApiService from '../../Services/api';
import { CardWeather } from '../../Components/Card';

export const WeatherContainer = memo(() => {
  const [nameLocale, setNameLocale] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [mode, setMode] = useState('CF');

  useEffect(() => {
    async function getLocation() {
      if (!('geolocation' in navigator)) {
        return alert('Navegador não compativel com geolocalização');
      }

      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          const {
            data: { results },
          } = await ApiService.getLocation(
            latitude,
            longitude,
            env.KEY_API_OPENCAGE
          );

          setNameLocale(
            `${results[0].components.village}, ${results[0].components.state}`
          );

          const { data } = await ApiService.getWeather(
            results[0].components.village,
            env.KEY_API_WEATHER
          );

          setWeatherInfo(data);
        },
        (error) => {
          return alert(`Error: ${error}`);
        }
      );
    }

    getLocation();
  }, []);

  const handleChange = useCallback((value) => {
    setNameLocale(value);
  }, []);

  const handleOnBlur = useCallback(async () => {
    if (!nameLocale) return alert('Por favor informe uma cidade');
    else {
      const { data } = await ApiService.getWeather(
        nameLocale,
        env.KEY_API_WEATHER
      );

      const {
        data: { results },
      } = await ApiService.getLocation(
        data.coord.lat,
        data.coord.lon,
        env.KEY_API_OPENCAGE
      );

      setNameLocale(
        `${
          results[0].components.village
            ? results[0].components.village
            : results[0].components.city
            ? results[0].components.city
            : results[0].components.state
        }, ${results[0].components.state}`
      );

      setWeatherInfo(data);
    }
  }, [nameLocale, setWeatherInfo]);

  return (
    <>
      {weatherInfo && (
        <CardWeather
          nameLocale={nameLocale}
          handleChange={handleChange}
          handleOnBlur={handleOnBlur}
          weather={weatherInfo}
          mode={mode}
        />
      )}
    </>
  );
});
