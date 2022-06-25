import React from 'react';
import { LocationInput, Weather } from '../index';
import { Container } from './styles';

export const App = () => {
  return (
    <Container>
      <LocationInput />
      <Weather />
    </Container>
  );
};
