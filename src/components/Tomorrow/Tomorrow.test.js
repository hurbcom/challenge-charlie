import { render, screen } from '@testing-library/react';
import { Tomorrow } from './index';


test('Render component Tomorrow and find strings', () => {
  render(<Tomorrow />);
  const tomorrowEL = screen.getByText(/Amanhã/i);
  const celsiusEl = screen.getByText(/ºC/i);
  expect(tomorrowEL).toBeInTheDocument();
  expect(celsiusEl).toBeInTheDocument();
});
