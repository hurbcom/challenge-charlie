import { useEffect, useState } from 'react';

import { useGeoLocation } from '../useGeoLocation';

interface NavigatorGeoLocationInterface {
  allowLocation: boolean;
  permissionDenid: boolean;
}

export default function useNavigatorGeoLocation(): NavigatorGeoLocationInterface {
  const [allowLocation, setAllowLocation] = useState<boolean>(false);
  const [permissionDenid, setPermissionDenid] = useState<boolean>(false);

  const { setLatitude, setLongitude } = useGeoLocation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setAllowLocation(true);
      },
      function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          setPermissionDenid(true);
        }
        setAllowLocation(false);
      },
    );
  });

  return {
    allowLocation,
    permissionDenid,
  };
}
