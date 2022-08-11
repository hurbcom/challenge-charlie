import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherInfo } from './';

test('WeatherInfo test render', () => {
  render(<WeatherInfo />);

  const text = screen.getByText('Eu sou o componente e meu nome é WeatherInfo');
  expect(text).toBeInTheDocument();
});
