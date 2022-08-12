import React, { useState } from 'react';
// import { getCurrentWeatherForecast } from '../../services/weather';
import { LocationInput } from '../input';
import { Container } from './styles';

export const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // getCurrentWeatherForecast(location);
  };

  return (
    <Container onSubmit={onSubmit}>
      <LocationInput
        placeholder="Cidade, Estado, País"
        name="searchLocation"
        data-testid="form-input"
        setLocation={setLocation}
      />
    </Container>
  );
};
