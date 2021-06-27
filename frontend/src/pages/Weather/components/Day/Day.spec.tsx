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
});
