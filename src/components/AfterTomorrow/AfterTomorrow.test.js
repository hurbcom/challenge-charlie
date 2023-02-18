import { render, screen } from '@testing-library/react';
import { AfterTomorrow } from './index';


test('Render component AfterTomorrow and find strings', () => {
  render(<AfterTomorrow />);
  const afterTomorrowEL = screen.getByText(/depois de amanhã/i);
  const celsiusEl = screen.getByText(/ºC/i);
  expect(afterTomorrowEL).toBeInTheDocument();
  expect(celsiusEl).toBeInTheDocument();
});
