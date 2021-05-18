
import { render, screen, queryByAttribute  } from '@testing-library/react';
import Weather from  './index'

test('Verifica se existe o loading', () => {
  render(<Weather />);
  const backGroundElement =  screen.getByRole('progressbar')
  expect(backGroundElement).toBeInTheDocument();
});


test('Verifica se existe o campo busca', () => {
  render(<Weather />);
  const backGroundElement =  screen.getByRole('textbox')
  expect(backGroundElement).toBeInTheDocument();
});
