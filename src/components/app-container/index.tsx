import React from 'react';
import { SearchBar } from '../search-bar';
import { WeatherContainer } from '../weather-container';
import { Container } from './styles';

export const AppContainer = () => {
  return (
    <Container>
      <SearchBar />
      <WeatherContainer />
    </Container>
  );
};
