import React, { useEffect, useState, useMemo, useCallback } from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import Icon from '../../components/Icon';
import Temperature from '../../components/Temperature';
import WeatherInformation from '../../components/WeatherInformation';

import {
  Container,
  WeatherContainer,
  Form,
  Spinner,
  WeatherToday,
  WeatherDetails,
  WeatherNextDay,
  WeatherNotFound,
} from './styles';

import { useRequest } from '../../hooks/useRequest';

import { useGeolocation, Coords } from '../../hooks/geolocation';

import {
  degreesToDirection,
  convertCelsiusToFahrenheit,
} from '../../util/converter';

import { getWeatherStatus } from '../../util/weatherStatus';

const openCageApiKey = '02a10adc6b0f40e2904f6e4db1dd50d9 ';
const openWeatherMap = '7ba73e0eb8efe773ed08bfd0627f07b8';

const Main: React.FC = () => {
  const [showAsFahrenheit, setShowAsFahrenheit] = useState(false);
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState<Coords>({
    latitude: null,
    longitude: null,
  });

  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const { coords: defaultCoords } = useGeolocation();

  useEffect(() => {
    async function loadData() {
      setCoords(defaultCoords);
      const { results } = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${defaultCoords.latitude},${defaultCoords.longitude}&key=${openCageApiKey}`,
      ).then(r => r.json());

      const [result] = results;
      setLocation(`${result?.components.city}, ${result?.components.state}`);
    }

    if (defaultCoords?.latitude) {
      loadData();
    }
  }, [defaultCoords]);

  const { data: weatherData, isValidating } = useRequest(() =>
    coords.latitude !== null
      ? `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${openWeatherMap}&units=metric&lang=pt_br`
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
    if (weather && !notFound) {
      return getWeatherStatus(weather.celsiusDegree);
    }

    return 'default';
  }, [weather, notFound]);

  const toggleShowTemperatureMode = useCallback(() => {
    setShowAsFahrenheit(mode => !mode);
  }, []);

  const handleFormSubmit = useCallback(
    async event => {
      try {
        setLoading(true);
        event.preventDefault();

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

        setNotFound(false);
      } catch {
        setNotFound(true);
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
          <Form onSubmit={handleFormSubmit} data-testid="form">
            {isValidating || loading ? <Spinner /> : <Icon symbol="compass" />}
            <input
              type="text"
              placeholder="Digite aqui sua localização"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </Form>

          {weather && !notFound ? (
            <>
              <WeatherToday>
                <Icon symbol={weather?.icon} />
                <WeatherDetails>
                  <Temperature
                    day="HOJE"
                    toggleCallback={toggleShowTemperatureMode}
                    showAsFahrenheit={showAsFahrenheit}
                    celsius={weather?.celsiusDegree}
                    fahrenheit={weather?.fahrenheitDegree}
                  />

                  <WeatherInformation
                    description={weather?.description}
                    windDirection={weather?.windDirection}
                    windSpeed={weather?.windSpeed}
                    humidity={weather?.humidity}
                    pressure={weather?.pressure}
                  />
                </WeatherDetails>
              </WeatherToday>

              <WeatherNextDay>
                <WeatherDetails>
                  <Temperature
                    day="AMANHÃ"
                    toggleCallback={toggleShowTemperatureMode}
                    showAsFahrenheit={showAsFahrenheit}
                    celsius={weather?.tomorrow.celsiusDegree}
                    fahrenheit={weather?.tomorrow.fahrenheitDegree}
                  />
                </WeatherDetails>
              </WeatherNextDay>

              <WeatherNextDay>
                <WeatherDetails>
                  <Temperature
                    day="DEPOIS DE AMANHÃ"
                    toggleCallback={toggleShowTemperatureMode}
                    showAsFahrenheit={showAsFahrenheit}
                    celsius={weather?.afterTomorrow.celsiusDegree}
                    fahrenheit={weather?.afterTomorrow.fahrenheitDegree}
                  />
                </WeatherDetails>
              </WeatherNextDay>
            </>
          ) : (
            <WeatherNotFound>
              <p>
                <b>Ops!</b>
                <br />
                Não conseguimos trazer as informações que você queria. Mas não
                se preocupe, você pode tentar novamente. Pesquise por uma
                cidade.
              </p>
            </WeatherNotFound>
          )}
        </WeatherContainer>
      </Container>
      <BackgroundImage />
    </>
  );
};

export default Main;
