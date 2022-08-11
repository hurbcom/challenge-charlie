import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './';

test('SearchBar test render', () => {
  render(<SearchBar />);

  const text = screen.getByText('Eu sou o componente e meu nome é SearchBar');
  expect(text).toBeInTheDocument();
});
