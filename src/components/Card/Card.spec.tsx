import React from 'react';
import { render } from '@testing-library/react';

import Card from '.';

test('Should display card correctly', () => {
  const { getByText } = render(<Card />);

  expect(getByText('Challenge Charlie')).toBeInTheDocument();
});
