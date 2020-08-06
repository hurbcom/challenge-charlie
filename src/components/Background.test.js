import React from 'react';
import { render, screen } from '@testing-library/react';
import Background from './Background';

test('renders children', () => {
  render(<Background>Hi</Background>);
  const children = screen.getByText(/Hi/i);
  expect(children).toBeInTheDocument();
});