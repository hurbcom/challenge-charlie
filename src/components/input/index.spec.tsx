import React from 'react';
import { render, screen } from '@testing-library/react';
import { LocationInput } from './';

test('Input test render', () => {
  const mockSetLocation = jest.fn();

  render(<LocationInput setLocation={mockSetLocation} />);

  const text = screen.getByText('Eu sou o componente e meu nome é Input');
  expect(text).toBeInTheDocument();
});
