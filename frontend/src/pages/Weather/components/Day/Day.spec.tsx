import React from 'react';
import { render, screen } from '@testing-library/react';

import Day from '.';

describe('Day component', () => {
  it('should display day correctly', () => {
    render(
      <Day
        day="Hoje"
        unitOfMeasure="ºC"
        weather={{
          temperatureInFahrenheit: 78,
          temperatureInCelsius: 34,
        }}
        variant="--today"
        onClickInTemperature={() => undefined}
      />,
    );

    expect(screen.getByTestId('day')).toBeInTheDocument();
  });

  it('adds --today class if variant property is --today', () => {
    render(
      <Day
        day="Hoje"
        unitOfMeasure="ºC"
        weather={{
          temperatureInFahrenheit: 78,
          temperatureInCelsius: 34,
        }}
        variant="--today"
        onClickInTemperature={() => undefined}
      />,
    );

    expect(screen.getByTestId('day')).toHaveClass('--today');
  });

  it('adds --cold class when temperature is under than 15ºC', () => {
    render(
      <Day
        day="Hoje"
        unitOfMeasure="ºC"
        weather={{
          temperatureInFahrenheit: 78,
          temperatureInCelsius: 14,
        }}
        variant="--today"
        onClickInTemperature={() => undefined}
      />,
    );

    expect(screen.getByTestId('day')).toHaveClass('--cold');
  });

  it('adds --hot class when temperature greater than 35ºC', () => {
    render(
      <Day
        day="Hoje"
        unitOfMeasure="ºC"
        weather={{
          temperatureInFahrenheit: 66,
          temperatureInCelsius: 36,
        }}
        variant="--today"
        onClickInTemperature={() => undefined}
      />,
    );

    expect(screen.getByTestId('day')).toHaveClass('--hot');
  });

  it('adds --disabled class when there is none location selected', () => {
    render(
      <Day
        day="Hoje"
        unitOfMeasure="ºC"
        weather={{}}
        variant="--today"
        onClickInTemperature={() => undefined}
      />,
    );

    expect(screen.getByTestId('day')).toHaveClass('--disabled');
  });

  it('should render icon B or C when classification is Clear', () => {
    render(
      <Day
        day="Hoje"
        unitOfMeasure="ºC"
        weather={{
          classification: 'Clear',
        }}
        variant="--today"
        onClickInTemperature={() => undefined}
      />,
    );

    const hour = new Date().getHours();
    const isNight = hour < 6 && hour > 20;

    if (isNight) {
      expect(screen.getByTestId('icon')).toHaveAttribute('data-icon', 'C');
    } else {
      expect(screen.getByTestId('icon')).toHaveAttribute('data-icon', 'B');
    }
  });
});
