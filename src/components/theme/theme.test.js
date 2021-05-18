import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se adicionou o backgroung corretamente.', () => {
  render(<App />);
  const backGroundElement = screen.getByText(/learn react/i);
  expect(backGroundElement).toBeInTheDocument();
});
