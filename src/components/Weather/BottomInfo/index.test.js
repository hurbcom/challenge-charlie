import React from 'react';
import { render, screen } from '@testing-library/react';
import { BottomInfo } from './index';

describe('BottomInfo', () => {
  const props = {
    wind: {
      direction: 'NO',
      speed: '9.3',
    },
    humidity: '53',
    pressure: '1019',
  };

  it('should do A', () => {
    const expectValues = {
      wind: `Vento: ${props.wind.direction} ${props.wind.speed}km/h`,
      humidity: `Humidade: ${props.humidity}%`,
      pressure: `Pressão: ${props.pressure}hPA`,
    };

    render(<BottomInfo {...props} />);

    expect(screen.getByText(expectValues.wind)).toBeInTheDocument();
    expect(screen.getByText(expectValues.humidity)).toBeInTheDocument();
    expect(screen.getByText(expectValues.pressure)).toBeInTheDocument();
  });
});
