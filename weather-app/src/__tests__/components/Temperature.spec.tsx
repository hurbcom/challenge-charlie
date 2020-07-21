import React from 'react';
import { render } from '@testing-library/react';

import Temperature from '../../components/Temperature';

describe('Temperature', () => {
  it('should be able to display the temperature', () => {
    const { getByTestId } = render(
      <>
        <Temperature
          day="HOJE"
          toggleCallback={jest.fn()}
          showAsFahrenheit={false}
          celsius={25}
          fahrenheit={62}
          data-testid="celsius"
        />

        <Temperature
          day="HOJE"
          toggleCallback={jest.fn()}
          showAsFahrenheit
          celsius={25}
          fahrenheit={62}
          data-testid="fahrenheit"
        />
      </>,
    );

    const celsius = getByTestId('celsius');
    const fahrenheit = getByTestId('fahrenheit');

    expect(celsius.innerHTML.match('25°C')).toBeTruthy();
    expect(fahrenheit.innerHTML.match('62°F')).toBeTruthy();
  });
});
