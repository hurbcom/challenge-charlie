import React from 'react';
import { render } from '@testing-library/react';
import { AppContainer } from './';

test('AppContainer test render', () => {
  const container = render(<AppContainer />);

  expect(container.container).toBeInTheDocument();
});
