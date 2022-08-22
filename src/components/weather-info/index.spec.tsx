import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherInfo } from './';
import { IFormattedDailyWeather } from '../../contexts/app-data/interfaces';

const props = {} as IFormattedDailyWeather;

test('WeatherInfo test BottomInfo render', () => {
  render(
    <WeatherInfo isOpen={true} {...props} wind={{ direction: 'NE', speed: '50' }} />,
  );

  const element = screen.getByTestId('weather-info');
  expect(element.textContent).toContain('NE 50km/h');
});

test('WeatherInfo test TopInfo render', () => {
  render(<WeatherInfo isOpen={true} {...props} day="hoje" temperature="30" />);

  const element = screen.getByTestId('weather-info');
  expect(element.textContent).toContain('hoje30ºC');
});

test('WeatherInfo test MidInfo render', () => {
  render(<WeatherInfo isOpen={true} {...props} description="descrição teste" />);

  const element = screen.getByTestId('weather-info');
  expect(element.textContent).toContain('descrição teste');
});
