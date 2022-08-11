import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherContainer } from './';

test('WeatherContainer test render', () => {
  render(<WeatherContainer />);

  const text = screen.getByText('Eu sou o componente e meu nome é WeatherContainer');
  expect(text).toBeInTheDocument();
});
