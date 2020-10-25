import { useEffect, useState } from 'react';
import { DynoRunsExternal, DynoRun } from 'external/dyno-runs';

export const useDynoRuns = () => {
  const [dynoRuns, setDynoRuns] = useState<DynoRun[]>([]);

  useEffect(() => {
    const subscriptions = [
      DynoRunsExternal.fetch().subscribe(result => {
        setDynoRuns(result);
      }),
    ];

    return () => subscriptions.map(s => s.unsubscribe());
  }, []);

  return { dynoRuns };
};
