import React from 'react';
import { useGeolocation } from '../../services/hooks/useGeolocation';
import { SearchBar } from '../search-bar';
import { WeatherContainer } from '../weather-container';
import { Container } from './styles';

export const AppContainer = () => {
  useGeolocation();
  return (
    <Container>
      <SearchBar />
      <WeatherContainer />
    </Container>
  );
};
