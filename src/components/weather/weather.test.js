
import { render, screen, queryByAttribute  } from '@testing-library/react';
import Weather from  './index'

test('Verifica se existe o loading', () => {
  render(<Weather />);
  const progressbar =  screen.getByRole('progressbar')
  expect(progressbar).toBeInTheDocument();
});


test('Verifica se existe o campo busca', () => {
  render(<Weather />);
  const textbox =  screen.getByRole('textbox')
  expect(textbox).toBeInTheDocument();
});
