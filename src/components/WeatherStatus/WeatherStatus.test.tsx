import React from 'react';
import MockDate from 'mockdate';
import { addDays, subDays } from 'date-fns';
import { fireEvent, render, screen } from '@testing-library/react';

import WeatherStatus, { WeatherStatusProps } from '.';

const mockedToday = new Date(2023, 1, 19);

const mockedWeather = {
  humidity: 55,
  pressure: 1016,
  wind: {
    speed: 3.6,
    degrees: 360,
  },
  temperature: 32.0,
  description: 'Ensolarado',
};

describe('components - <WeatherStatus />', () => {
  beforeEach(() => {
    MockDate.set(new Date(2023, 1, 19));
  });

  const defaultValues: WeatherStatusProps = {
    date: mockedToday,
    weather: mockedWeather,
  };

  describe('simple mode - day text and temperature tests', () => {
    it('should render with temperature and correct day', () => {
      render(<WeatherStatus {...defaultValues} />);

      expect(screen.getByText('Hoje')).toBeInTheDocument();
      expect(screen.getByText('32ºC')).toBeInTheDocument();
    });

    it('should show text date correctly when is tomorrow and send different weather infos', () => {
      const tomorrow = addDays(new Date(), 1);

      render(<WeatherStatus date={tomorrow} weather={{ ...defaultValues.weather, temperature: 20.0 }} />);

      expect(screen.getByText('Amanhã')).toBeInTheDocument();
      expect(screen.getByText('20ºC')).toBeInTheDocument();
    });

    it('should show text date correctly when the date is after tomorrow', () => {
      const tomorrow = addDays(new Date(), 2);

      render(<WeatherStatus {...defaultValues} date={tomorrow} />);

      expect(screen.getByText('Depois de amanhã')).toBeInTheDocument();
    });

    it('should return nothing when is not on range of three days', () => {
      const tomorrow = addDays(new Date(), 3);

      const { container } = render(<WeatherStatus {...defaultValues} date={tomorrow} />);

      expect(container.firstChild).toBeNull();
    });

    it('should return nothing when the date is on the past', () => {
      const tomorrow = subDays(new Date(), 1);

      const { container } = render(<WeatherStatus {...defaultValues} date={tomorrow} />);

      expect(container.firstChild).toBeNull();
    });

    it('should render be able to change between Celsius and Fahrenheit whens clicks on temperature', () => {
      render(<WeatherStatus {...defaultValues} />);

      const celciusTemperature = screen.getByText('32ºC');

      expect(celciusTemperature).toBeInTheDocument();
      expect(screen.queryByText('89.6ºF')).not.toBeInTheDocument();

      fireEvent.click(celciusTemperature);

      const fahrenheitTemperature = screen.getByText('89.6ºF');

      expect(screen.queryByText('32ºC')).not.toBeInTheDocument();
      expect(fahrenheitTemperature).toBeInTheDocument();

      fireEvent.click(fahrenheitTemperature);

      expect(celciusTemperature).toBeInTheDocument();
      expect(screen.queryByText('89.6ºF')).not.toBeInTheDocument();
    });
  });

  // it('should render with detailed info', () => {
  //   render(<WeatherStatus {...defaultValues} isDetailed />);

  //   expect(screen.getByText('Hoje')).toBeInTheDocument();
  //   expect(screen.getByText('32ºC')).toBeInTheDocument();

  //   expect(screen.getByText('Ensolarado')).toBeInTheDocument();
  //   expect(screen.getByText('Vento: NO 3.6km/H')).toBeInTheDocument();
  //   expect(screen.getByText('Humidade: 55%')).toBeInTheDocument();
  //   expect(screen.getByText('Pressão: 1016hPA')).toBeInTheDocument();
  // });
});
