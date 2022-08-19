import { useEffect, useState } from "react";

interface useDebounceProps<T> {
  value: T;
  delay?: number;
  onDebounce: (v: T) => void;
}

export const useDebounce = <T>({ value, onDebounce, delay = 700 }: useDebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue, onDebounce]);
};
