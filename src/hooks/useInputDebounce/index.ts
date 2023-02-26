import { ChangeEventHandler, useEffect, useMemo, useRef } from 'react';

import { debounce } from '~/utils';

export function useInputDebounce(onChange?: ChangeEventHandler<HTMLInputElement>) {
  const debounceRef = useRef<ChangeEventHandler<HTMLInputElement> | undefined>(onChange);

  useEffect(() => {
    debounceRef.current = onChange;
  }, [onChange]);

  const debouncedCallback = useMemo(() => {
    return debounce({
      action: debounceRef.current,
    });
  }, []);

  return { debouncedCallback };
}
