import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('test render', () => {
  render(<App />);

  const text = screen.getByText('Hello World');
  expect(text).toBeInTheDocument();
});
