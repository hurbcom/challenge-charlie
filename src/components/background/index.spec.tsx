import React from 'react';
import { render, screen } from '@testing-library/react';
import { Background } from './';
import * as backgroundHooks from '../../services/hooks/useBackground/useBackground';

test('Background test render', () => {
  jest
    .spyOn(backgroundHooks, 'useBackground')
    .mockReturnValue({ imageUrl: 'www.mytest.com' });
  render(<Background>Hello</Background>);

  const element = screen.getByText('Hello');
  const styles = getComputedStyle(element);
  expect(styles.backgroundImage).toBe('url(www.mytest.com)');
});
