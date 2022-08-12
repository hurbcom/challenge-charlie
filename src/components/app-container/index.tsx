import React from 'react';
import AppDataProvider from '../../contexts/app-data';
import { SearchBar } from '../search-bar';
import { WeatherContainer } from '../weather-container';
import { Container } from './styles';

export const AppContainer = () => {
  return (
    <AppDataProvider>
      <Container>
        <SearchBar />
        <WeatherContainer />
      </Container>
    </AppDataProvider>
  );
};
