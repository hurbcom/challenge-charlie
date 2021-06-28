/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useEffect } from 'react';

export default function useDebounce(
  handler: Function,
  watchedValue: any,
  delay: number,
) {
  useEffect(() => {
    const timeoutHandler = setTimeout(handler, delay);

    return () => clearTimeout(timeoutHandler);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedValue, delay]);
}
