import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherIcon } from './';

test('WeatherIcon test render', () => {
  render(<WeatherIcon isOpen={true} iconCode="" />);

  const text = screen.getByText('Eu sou o componente e meu nome é WeatherIcon');
  expect(text).toBeInTheDocument();
});
