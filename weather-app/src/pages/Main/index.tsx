import React, { useEffect, useState, useMemo, useCallback } from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import Icon from '../../components/Icon';

import {
  Container,
  WeatherContainer,
  Form,
  Spinner,
  WeatherToday,
  WeatherDetails,
  WeatherNextDay,
} from './styles';

import { useRequest } from '../../hooks/useRequest';

import { useGeolocation } from '../../hooks/geolocation';

import {
  degreesToDirection,
  convertCelsiusToFahrenheit,
} from '../../util/converter';

const openCageApiKey = '02a10adc6b0f40e2904f6e4db1dd50d9 ';
const openWeatherMap = '7ba73e0eb8efe773ed08bfd0627f07b8';

interface Coords {
  latitude: number;
  longitude: number;
}

const Main: React.FC = () => {
  const [showAsFahrenheit, setShowAsFahrenheit] = useState(false);
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState<Coords | null>(null);
  const [loading, setLoading] = useState(false);

  const { coords: defaultCoords } = useGeolocation();

  const { data: defaultLocationData } = useRequest(
    () =>
      defaultCoords?.latitude !== undefined
        ? `https://api.opencagedata.com/geocode/v1/json?q=${defaultCoords?.latitude},${defaultCoords?.longitude}&key=${openCageApiKey}`
        : null,
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const { data: weatherData, isValidating } = useRequest(() =>
    coords?.latitude !== undefined
      ? `http://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${openWeatherMap}&units=metric&lang=pt_br`
      : null,
  );

  const weather = useMemo(() => {
    if (weatherData) {
      const { current, daily } = weatherData;
      return {
        celsiusDegree: Math.floor(current.temp),
        fahrenheitDegree: Math.floor(convertCelsiusToFahrenheit(current.temp)),
        pressure: current.pressure,
        windDirection: degreesToDirection(current.wind_deg),
        windSpeed: (current.wind_speed * 3.6).toFixed(1),
        humidity: current.humidity,
        description: current.weather[0].description,
        icon: current.weather[0].icon,
        tomorrow: {
          celsiusDegree: Math.floor(daily[1].temp.day),
          fahrenheitDegree: Math.floor(
            convertCelsiusToFahrenheit(daily[1].temp.day),
          ),
        },

        afterTomorrow: {
          celsiusDegree: Math.floor(daily[2].temp.day),
          fahrenheitDegree: Math.floor(
            convertCelsiusToFahrenheit(daily[2].temp.day),
          ),
        },
      };
    }

    return null;
  }, [weatherData]);

  const weatherStatus = useMemo(() => {
    if (weather) {
      if (weather.celsiusDegree < 15) {
        return 'cold';
      }
      if (weather.celsiusDegree >= 15) {
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
    }
  }, [defaultLocationData, defaultCoords]);

  const toggleShowDegreeMode = useCallback(() => {
    setShowAsFahrenheit(mode => !mode);
  }, []);

  const handleFormSubmit = useCallback(
    async event => {
      try {
        setLoading(true);
        event.preventDefault();

        if (!location) {
          window.alert('Digite o nome da cidade para pesquisar');
          return;
        }

        const { results } = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${openCageApiKey}`,
        ).then(r => r.json());

        const [result] = results;

        if (result.components.city && result.components.state) {
          setLocation(`${result.components.city}, ${result.components.state}`);
        } else {
          setLocation(`${result.formatted}`);
        }

        setCoords({
          latitude: result.geometry.lat,
          longitude: result.geometry.lng,
        });
      } catch {
        // TODO
      } finally {
        setLoading(false);
      }
    },
    [location],
  );

  return (
    <>
      <Container>
        <WeatherContainer className={weatherStatus}>
          <Form onSubmit={handleFormSubmit}>
            {isValidating || loading ? <Spinner /> : <Icon symbol="compass" />}
            <input
              type="text"
              placeholder="Digite aqui sua localização"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </Form>

          <WeatherToday>
            <Icon symbol={weather?.icon} />
            <WeatherDetails>
              <strong
                onClick={toggleShowDegreeMode}
                title="Clique para mudar o modo de exibição"
              >
                HOJE
                <br />
                {showAsFahrenheit
                  ? `${weather?.fahrenheitDegree}°F`
                  : `${weather?.celsiusDegree}°C`}
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
              <strong
                onClick={toggleShowDegreeMode}
                title="Clique para mudar o modo de exibição"
              >
                AMANHÃ
                <br />
                {showAsFahrenheit
                  ? `${weather?.tomorrow.fahrenheitDegree}°F`
                  : `${weather?.tomorrow.celsiusDegree}°C`}
              </strong>
            </WeatherDetails>
          </WeatherNextDay>

          <WeatherNextDay>
            <WeatherDetails>
              <strong
                onClick={toggleShowDegreeMode}
                title="Clique para mudar o modo de exibição"
              >
                DEPOIS DE AMANHÃ
                <br />
                {showAsFahrenheit
                  ? `${weather?.afterTomorrow.fahrenheitDegree}°F`
                  : `${weather?.afterTomorrow.celsiusDegree}°C`}
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
