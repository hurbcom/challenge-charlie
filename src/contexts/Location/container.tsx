import React, { memo, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import services from 'services';
import { LocationContextPayload } from './types';
import { LocationProvider } from '.';

function LocationContainer({ children }: PropsWithChildren): React.ReactElement {
  // eslint-disable-next-line
  const [coords, setCoords] = useState<GeolocationPosition['coords'] | null>(null);

  const [allowed, setAllowed] = useState(false);

  const isGeolocationAllowedOrAbleToAsk = async () => {
    try {
      const allowed = await services.getLocation.isGeolocationAllowedOrAbleToAsk();

      return setAllowed(allowed);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const getLocation = async () => {
    try {
      // eslint-disable-next-line
      const location = (await services.getLocation.getLocation()) as GeolocationPosition;

      return setCoords(location.coords);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    void getLocation();
  }, []);

  const payload = useMemo<LocationContextPayload>(
    () => ({
      allowed,
      coords,
    }),
    [allowed, coords],
  );

  return <LocationProvider value={payload}>{children}</LocationProvider>;
}

export default memo(LocationContainer);
