import React from 'react';
import MockDate from 'mockdate';
import { addDays, subDays } from 'date-fns';
import { fireEvent, screen } from '@testing-library/react';

import { Weather } from '~/@types/openWeather';
import renderWithProviders from '~/utils/renderWithProviders';
import { theme } from '~/styles/theme';

import WeatherStatus, { WeatherStatusProps } from '.';

const mockedToday = new Date(2023, 1, 19);

const mockedWeather: Weather = {
  humidity: 55,
  pressure: 1016,
  icon: '10d',
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
      renderWithProviders(<WeatherStatus {...defaultValues} />);

      expect(screen.getByText('Hoje')).toBeInTheDocument();
      expect(screen.getByText('32ºC')).toBeInTheDocument();
    });

    it('should show text date correctly when is tomorrow and send different weather infos', () => {
      const tomorrow = addDays(new Date(), 1);

      renderWithProviders(<WeatherStatus date={tomorrow} weather={{ ...mockedWeather, temperature: 20.0 }} />);

      expect(screen.getByText('Amanhã')).toBeInTheDocument();
      expect(screen.getByText('20ºC')).toBeInTheDocument();
    });

    it('should show text date correctly when the date is after tomorrow', () => {
      const tomorrow = addDays(new Date(), 2);

      renderWithProviders(<WeatherStatus {...defaultValues} date={tomorrow} />);

      expect(screen.getByText('Depois de amanhã')).toBeInTheDocument();
    });

    it('should return nothing when is not on range of three days', () => {
      const tomorrow = addDays(new Date(), 3);

      const { container } = renderWithProviders(<WeatherStatus {...defaultValues} date={tomorrow} />);

      const weatherInfos = container.firstChild?.firstChild;

      expect(weatherInfos).toBeNull();
    });

    it('should return nothing when the date is on the past', () => {
      const tomorrow = subDays(new Date(), 1);

      const { container } = renderWithProviders(<WeatherStatus {...defaultValues} date={tomorrow} />);

      const weatherInfos = container.firstChild?.firstChild;

      expect(weatherInfos).toBeNull();
    });

    it('should render be able to change between Celsius and Fahrenheit whens clicks on temperature', () => {
      renderWithProviders(<WeatherStatus {...defaultValues} />);

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

  describe('background color', () => {
    it("should render gray when doesn't have weather info", () => {
      const { container } = renderWithProviders(<WeatherStatus date={mockedToday} />);

      const componentContainer = container.firstChild;

      expect(componentContainer).toHaveStyleRule('background', theme.colors.gray200, {
        modifier: '::before',
      });
    });

    it('should render blue when is less than 15ºC or 59ºF', () => {
      const { container } = renderWithProviders(
        <WeatherStatus date={mockedToday} weather={{ ...mockedWeather, temperature: 14 }} />,
      );

      const componentContainer = container.firstChild;

      expect(componentContainer).toHaveStyleRule('background', theme.colors.blue, {
        modifier: '::before',
      });
    });

    it('should render red when is more than 35ºC or 95ºF', () => {
      const { container } = renderWithProviders(
        <WeatherStatus date={mockedToday} weather={{ ...mockedWeather, temperature: 36 }} />,
      );

      const componentContainer = container.firstChild;

      expect(componentContainer).toHaveStyleRule('background', theme.colors.red, {
        modifier: '::before',
      });
    });

    it('should render yellow when is equal or between (15ºC or 59ºF) and (35ºC or 95ºF)', () => {
      const { container } = renderWithProviders(<WeatherStatus date={mockedToday} weather={mockedWeather} />);

      const componentContainer = container.firstChild;

      expect(componentContainer).toHaveStyleRule('background', theme.colors.yellow, {
        modifier: '::before',
      });
    });
  });

  // it('should render with detailed info', () => {
  //   renderWithProviders(<WeatherStatus {...defaultValues} isDetailed />);

  //   expect(screen.getByText('Hoje')).toBeInTheDocument();
  //   expect(screen.getByText('32ºC')).toBeInTheDocument();

  //   expect(screen.getByText('Ensolarado')).toBeInTheDocument();
  //   expect(screen.getByText('Vento: NO 3.6km/H')).toBeInTheDocument();
  //   expect(screen.getByText('Humidade: 55%')).toBeInTheDocument();
  //   expect(screen.getByText('Pressão: 1016hPA')).toBeInTheDocument();
  // });
});
