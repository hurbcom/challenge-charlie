import { useEffect, useState } from 'react';
import { DynoRunsExternal, DynoRun, DynoRunDetails } from 'external/dyno-runs';

export const useDynoRunDetails = ({ id }: { id: string }) => {
  const [dynoRunDetails, setDynoRunDetails] = useState<DynoRunDetails>();

  useEffect(() => {
    const subscriptions = [
      DynoRunsExternal.fetchSingle({ id }).subscribe(result => {
        setDynoRunDetails(result);
      }),
    ];

    return () => subscriptions.map(s => s.unsubscribe());
  }, []);

  return { dynoRunDetails };
};
