import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStoragePropsReturn<T> = [T, Dispatch<SetStateAction<T>>];

export interface UseLocalStorageProps<T> {
  key: string;
  initialState: T;
}

export function useLocalStorage<T>({ initialState, key }: UseLocalStorageProps<T>): UseLocalStoragePropsReturn<T> {
  const [state, setState] = useState<T>(() => {
    if (typeof window === 'undefined') return initialState;

    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
