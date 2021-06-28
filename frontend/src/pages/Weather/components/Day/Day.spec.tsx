import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
});
/**
 * Regras para implementar + testes:
 * [ ] - Para temperaturas abaixo de 15ºC deve ser usado tons de azul
 * [ ] - para temperaturas acima de 35ºC deve ser usado tons de vermelho
 * [ ] - use tons de amarelo para as demais temperaturas.
 * [ ] - Quando não houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degradê.
 */
