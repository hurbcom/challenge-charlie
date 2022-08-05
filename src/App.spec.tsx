import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('App test render', () => {
  const container = render(<App />);

  expect(container.container).toBeInTheDocument();
});
