import { renderHook } from '@testing-library/react';
import { useTheme } from './useTheme';

test('useTheme test', () => {
  const setTheme = jest.fn();
  renderHook(() => useTheme({ temperature: '30', setTheme }));

  expect(setTheme).toHaveBeenCalled();
});
