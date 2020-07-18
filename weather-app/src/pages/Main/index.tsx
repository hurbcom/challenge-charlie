import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

import BackgroundImage from '../../components/BackgroundImage';

import { Container, WeatherContainer, InputContainer } from './styles';
import { useGeolocation } from '../../hooks/geolocation';

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

  const { data: weather, error } = useSWR(
    () =>
      ableToSearch && coords?.latitude !== undefined
        ? `http://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${openWeatherMap}&units=metric`
        : null,
    fetcher,
    { errorRetryCount: 10 },
  );

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
        <WeatherContainer>
          <InputContainer>
            <span data-icon="(" />
            <input
              type="text"
              placeholder="Digite aqui sua localização"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </InputContainer>
        </WeatherContainer>
      </Container>
      <BackgroundImage />
    </>
  );
};

export default Main;
