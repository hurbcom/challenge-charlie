import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Weather from '../../components/Weather';

describe('Weather Component', () => {
  it('Should be able to render the Weather', () => {
    const { debug } = render(
      <Weather
        title="HOJE"
        degrade={0}
        onClick={() => {
          console.log('Do nothing');
        }}
        weather={{
          humidity: 40,
          pressure: 1010,
          speed: 1,
          temp: { day: 30 },
          weather: [{ icon: '01d', description: 'Heavy rain' }],
        }}
        active
      />,
    );

    debug();
  });

  it('Should be able to render the Weather', () => {
    const { getByText } = render(
      <Weather
        title="HOJE"
        degrade={0}
        onClick={() => {
          console.log('Do nothing');
        }}
        weather={{
          humidity: 40,
          pressure: 1010,
          speed: 1,
          temp: { day: 30 },
          weather: [{ icon: '10d', description: 'Heavy rain' }],
        }}
        active
      />,
    );

    const buttonElement = getByText('30ºC');
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent('30ºC');
  });
});
