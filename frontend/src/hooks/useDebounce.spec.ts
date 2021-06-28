/* eslint-disable max-len */
import { renderHook } from '@testing-library/react-hooks';

import useDebounce from '@hooks/useDebounce';

describe('useMyName tests', () => {
  it('should call function just a time per second if specified', () => {
    let calledAttempts = 0;
    let watchedValue = 0;

    const myFunction = (): void => {
      calledAttempts += 1;
    };

    renderHook(() => useDebounce(
      myFunction,
      watchedValue,
      1000,
    ));

    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;

    setInterval(() => {
      expect(calledAttempts).toBe(1);
    }, 2000);
  });

  it('should call function two times when has a new call after 1 second', () => {
    let calledAttempts = 0;
    let watchedValue = 0;

    const myFunction = (): void => {
      calledAttempts += 1;
    };

    renderHook(() => useDebounce(
      myFunction,
      watchedValue,
      1000,
    ));

    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;

    setInterval(() => {
      watchedValue += 1;
    }, 2000);

    setInterval(() => {
      expect(calledAttempts).toBe(2);
    }, 4000);
  });

  it('should be called just one time when is requested 10 times in a second', () => {
    let calledAttempts = 0;
    let watchedValue = 0;

    const myFunction = (): void => {
      calledAttempts += 1;
    };

    renderHook(() => useDebounce(
      myFunction,
      watchedValue,
      1000,
    ));

    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;
    watchedValue += 1;

    setInterval(() => {
      expect(calledAttempts).toBe(1);
    }, 2000);
  });
});
