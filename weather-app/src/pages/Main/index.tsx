import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

import BackgroundImage from '../../components/BackgroundImage';

import { Container, WeatherContainer, InputContainer } from './styles';
import { useGeolocation } from '../../hooks/geolocation';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const Main: React.FC = () => {
  const [defaultLocation, setDefaultLocation] = useState('');
  const coords = useGeolocation();

  const { data: defaultLocationData } = useSWR(
    () =>
      typeof coords.latitude !== 'undefined'
        ? `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude},${coords.longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
        : null,
    fetcher,
  );

  useEffect(() => {
    if (defaultLocationData) {
      const [result] = defaultLocationData.results;
      setDefaultLocation(
        `${result.components.city}, ${result.components.state}`,
      );
    }
  }, [defaultLocationData]);

  return (
    <>
      <Container>
        <WeatherContainer>
          <InputContainer>
            <span data-icon="(" />
            <input
              type="text"
              placeholder="Digite aqui sua localização"
              defaultValue={defaultLocation}
            />
          </InputContainer>
        </WeatherContainer>
      </Container>
      <BackgroundImage />
    </>
  );
};

export default Main;
