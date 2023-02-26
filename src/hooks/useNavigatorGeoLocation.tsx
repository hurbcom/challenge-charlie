import { useEffect, useState } from 'react';

interface NavigatorGeoLocationInterface {
  latitude: number;
  longitude: number;
  allowLocation: boolean;
  permissionDenid: boolean;
}

export default function useNavigatorGeoLocation(): NavigatorGeoLocationInterface {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [allowLocation, setAllowLocation] = useState<boolean>(false);
  const [permissionDenid, setPermissionDenid] = useState<boolean>(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setAllowLocation(true);

        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);
      },
      function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          console.log('you denied me :-(');
          setPermissionDenid(true);
        }
        setAllowLocation(false);
      },
    );
  });

  return {
    latitude,
    longitude,
    allowLocation,
    permissionDenid,
  };
}
