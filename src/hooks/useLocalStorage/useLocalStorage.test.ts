import { renderHook } from '@testing-library/react';

import { useLocalStorage, UseLocalStorageProps } from './';

describe('hooks - useLocalStorage', () => {
  const defaultProps: UseLocalStorageProps<object> = {
    key: '@weather-app/teste',
    initialState: { success: true },
  };

  it('should set the initial value on localStorage', () => {
    const { result } = renderHook(() => useLocalStorage(defaultProps));

    const [myResult] = result.current;

    expect(localStorage.setItem).toHaveBeenLastCalledWith(defaultProps.key, JSON.stringify(defaultProps.initialState));

    expect(myResult).toEqual(defaultProps.initialState);
  });

  it('should get a current value from localStorage and ignore the initial state in this case', () => {
    const { result } = renderHook(() => useLocalStorage({ key: defaultProps.key, initialState: { success: false } }));

    const [myResult] = result.current;

    expect(localStorage.getItem).toHaveBeenLastCalledWith(defaultProps.key);

    expect(myResult).toEqual(defaultProps.initialState);
  });
});
