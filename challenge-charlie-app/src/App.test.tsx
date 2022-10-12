import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import DisplayComponent from './component/DisplayComponent';

test('renders learn react link', () => {
  render(<DisplayComponent />);
  const linkElement = screen.getByText(/Charlie/i);
  expect(linkElement).toBeInTheDocument();
});
