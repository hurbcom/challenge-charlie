import React, { useContext, useEffect, useState } from 'react';
import { AppDataContext } from '../../contexts/app-data';
import { getCoordinates } from '../../services/hooks/useGeolocation';
import { getWeather } from '../../services/hooks/useWeather';
import { LocationInput } from '../input';
import { Container } from './styles';

export const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('');
  const { userLocation, setDailyWeather } = useContext(AppDataContext);

  useEffect(() => {
    if (userLocation) {
      setLocation(userLocation);
    }
  }, [userLocation]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getCoordinates(location).then(({ latitude, longitude }) =>
      getWeather({ latitude, longitude }).then(data => setDailyWeather(data)),
    );
  };

  return (
    <Container onSubmit={onSubmit}>
      <LocationInput
        placeholder="Cidade, Estado, País"
        name="searchLocation"
        data-testid="form-input"
        location={location}
        setLocation={setLocation}
      />
    </Container>
  );
};
