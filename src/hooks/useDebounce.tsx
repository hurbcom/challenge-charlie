import { useRef } from "react";

export default function useDebounce(fn: Function, delay: number) {
  const timeoutRef = useRef(null);

  const debouncedFunction = (...args) => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debouncedFunction;
}
