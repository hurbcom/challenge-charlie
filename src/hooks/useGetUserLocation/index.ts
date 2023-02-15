import { RefObject, useEffect, useState } from 'react';

export function useGetUserLocation(elementToFocus?: RefObject<HTMLInputElement>) {
  const [coordinates, setCoordinates] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const successCallback = (currentCoordinates: GeolocationPosition) => {
        setCoordinates(currentCoordinates);
      };

      const errorCallback = () => {
        elementToFocus?.current?.focus();
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, [elementToFocus]);

  return { coordinates };
}
