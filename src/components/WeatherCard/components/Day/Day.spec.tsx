import React from 'react';
import { render, screen } from '@testing-library/react';

import Day from '.';

describe('Day component', () => {
  it('should display day correctly', () => {
    render(
      <Day
        day="Hoje"
        temperature="32ºC"
        variant="--today"
      />,
    );

    expect(screen.getByTestId('day')).toBeInTheDocument();
  });

  it('adds --today class if variant property is --today', () => {
    render(
      <Day
        day="Hoje"
        temperature="32ºC"
        variant="--today"
      />,
    );

    expect(screen.getByTestId('day')).toHaveClass('--today');
  });
});
