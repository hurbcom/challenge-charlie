import React, { useEffect, useState, useMemo } from 'react';
import useSWR from 'swr';

import BackgroundImage from '../../components/BackgroundImage';
import Icon from '../../components/Icon';

import {
  Container,
  WeatherContainer,
  InputContainer,
  WeatherToday,
  WeatherDetails,
  WeatherNextDay,
} from './styles';

import { useGeolocation } from '../../hooks/geolocation';
import { degreesToDirection } from '../../util/converter';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const openCageApiKey = '02a10adc6b0f40e2904f6e4db1dd50d9 ';
const openWeatherMap = '7ba73e0eb8efe773ed08bfd0627f07b8';

interface Coords {
  latitude: number;
  longitude: number;
}

const Main: React.FC = () => {
  const [ableToSearch, setAbleToSearch] = useState(false);
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState<Coords | null>(null);

  const { coords: defaultCoords } = useGeolocation();

  const { data: defaultLocationData } = useSWR(
    () =>
      defaultCoords?.latitude !== undefined
        ? `https://api.opencagedata.com/geocode/v1/json?q=${defaultCoords?.latitude},${defaultCoords?.longitude}&key=${openCageApiKey}`
        : null,
    fetcher,
    { errorRetryCount: 10 },
  );

  const { data: weatherData } = useSWR(
    () =>
      ableToSearch && coords?.latitude !== undefined
        ? `http://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${openWeatherMap}&units=metric&lang=pt_br`
        : null,
    fetcher,
    { errorRetryCount: 10 },
  );

  const weather = useMemo(() => {
    if (weatherData) {
      const { current, daily } = weatherData;
      return {
        temp: Math.floor(current.temp),
        pressure: current.pressure,
        windDirection: degreesToDirection(current.wind_deg),
        windSpeed: (current.wind_speed * 3.6).toFixed(1),
        humidity: current.humidity,
        description: current.weather[0].description,
        icon: current.weather[0].icon,
        tomorrow: {
          temp: Math.floor(daily[1].temp.day),
        },

        afterTomorrow: {
          temp: Math.floor(daily[2].temp.day),
        },
      };
    }

    return null;
  }, [weatherData]);

  const weatherStatus = useMemo(() => {
    if (weather) {
      if (weather.temp < 15) {
        return 'cold';
      }
      if (weather.temp >= 15) {
        return 'hot';
      }

      return 'too-hot';
    }

    return 'cold';
  }, [weather]);
  useEffect(() => {
    if (defaultLocationData && defaultLocationData.results.length) {
      const [result] = defaultLocationData.results;
      setLocation(`${result?.components.city}, ${result?.components.state}`);
      setCoords(defaultCoords);
      setAbleToSearch(true);
    }
  }, [defaultLocationData, defaultCoords]);

  return (
    <>
      <Container>
        <WeatherContainer className={weatherStatus}>
          <InputContainer>
            <Icon symbol="compass" />
            <input
              type="text"
              placeholder="Digite aqui sua localização"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </InputContainer>

          <WeatherToday>
            <Icon symbol={weather?.icon} />
            <WeatherDetails>
              <strong>
                HOJE
                <br />
                {`${weather?.temp}°C`}
              </strong>

              <strong>{weather?.description}</strong>

              <p>
                {`Vento: ${weather?.windDirection} ${weather?.windSpeed}km/h`}
                <br />
                {`Humidade: ${weather?.humidity}%`}
                <br />
                {`Pressão: ${weather?.pressure}hPA`}
              </p>
            </WeatherDetails>
          </WeatherToday>

          <WeatherNextDay>
            <WeatherDetails>
              <strong>
                AMANHÃ
                <br />
                {`${weather?.tomorrow.temp}°C`}
              </strong>
            </WeatherDetails>
          </WeatherNextDay>

          <WeatherNextDay>
            <WeatherDetails>
              <strong>
                DEPOIS DE AMANHÃ
                <br />
                {`${weather?.afterTomorrow.temp}°C`}
              </strong>
            </WeatherDetails>
          </WeatherNextDay>
        </WeatherContainer>
      </Container>
      <BackgroundImage />
    </>
  );
};

export default Main;
