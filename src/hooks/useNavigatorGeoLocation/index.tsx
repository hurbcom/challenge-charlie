import { useEffect, useState, useContext } from 'react';

import { GeoLocationContext } from '@contexts/GeoLocationContext';

interface NavigatorGeoLocationInterface {
  allowLocation: boolean;
  permissionDenid: boolean;
}

export default function useNavigatorGeoLocation(): NavigatorGeoLocationInterface {
  const [allowLocation, setAllowLocation] = useState<boolean>(false);
  const [permissionDenid, setPermissionDenid] = useState<boolean>(false);

  const { geoLocation, setGeoLocation } = useContext(GeoLocationContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setGeoLocation({
          ...geoLocation,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setAllowLocation(true);
      },
      function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          setPermissionDenid(true);
        }
        setAllowLocation(false);
      }
    );
  }, []);

  return {
    allowLocation,
    permissionDenid
  };
}
