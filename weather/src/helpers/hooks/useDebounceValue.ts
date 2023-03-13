import { useEffect, useState } from "react";

export const useDebounceValue = (value: any, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState(value);
    
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
      
      return () => {
        clearTimeout(timeout);
      }
    }, [value, delay]);
    
    return debounceValue;
  };