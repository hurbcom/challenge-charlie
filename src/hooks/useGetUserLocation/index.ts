import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState } from 'react';

import { Location } from '~/@types';
import { getLocation } from '~/services';
import { InputHandleProps } from '~/components/Input';

export interface UseGetUserLocationProps {
  currentManualLocation: string;
  elementToFocus?: RefObject<InputHandleProps> | null;
  setCurrentManualLocation: Dispatch<SetStateAction<string>>;
}

export function useGetUserLocation({
  elementToFocus,
  currentManualLocation,
  setCurrentManualLocation,
}: UseGetUserLocationProps) {
  const [location, setLocation] = useState<Partial<Location> | null>(null);
  const [isAutoLocation, setIsAutoLocation] = useState<boolean | null>(null);
  const [isGeolocationRefused, setIsGeolocationRefused] = useState<boolean>(false);
  const [lastLocationSearch, setLastLocationSearch] = useState<string | null>(null);

  const autoLocationSuccessCallback = useCallback(async (currentCoordinates: GeolocationPosition) => {
    setIsAutoLocation(true);
    setIsGeolocationRefused(false);

    const newCoordinates = {
      latitude: currentCoordinates.coords.latitude,
      longitude: currentCoordinates.coords.longitude,
    };

    const currentLocation = await getLocation(`${newCoordinates.latitude}+${newCoordinates.longitude}`);

    const restOfLocation: Partial<Location> = !!currentLocation
      ? {
          city: currentLocation[0].city,
          state: currentLocation[0].state,
        }
      : {};

    setLocation({
      ...newCoordinates,
      ...restOfLocation,
    });
  }, []);

  const autoLocationErrorCallback = useCallback(() => {
    setIsAutoLocation(false);
    setIsGeolocationRefused(true);

    elementToFocus?.current?.focus();
  }, [elementToFocus]);

  useEffect(() => {
    async function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(autoLocationSuccessCallback, autoLocationErrorCallback, {
          enableHighAccuracy: true,
        });
      }
    }

    getUserLocation();
  }, [autoLocationErrorCallback, autoLocationSuccessCallback]);

  useEffect(() => {
    if (!location || !location.city) return;

    const state = !!location?.state ? `, ${location.state}` : '';

    const formattedForInputLocation = `${location?.city}${state}`;

    setCurrentManualLocation(formattedForInputLocation);
    setLastLocationSearch(formattedForInputLocation);
  }, [location, setCurrentManualLocation]);

  useEffect(() => {
    async function handleGetNewLocation() {
      const isUserManuallyChangeLocation =
        !!location &&
        !isAutoLocation &&
        !!currentManualLocation &&
        !currentManualLocation.includes(location?.city || '');

      const isUserRefusesGeolocationAndChangeManually =
        isGeolocationRefused && !!currentManualLocation && currentManualLocation !== lastLocationSearch;

      if (isUserManuallyChangeLocation || isUserRefusesGeolocationAndChangeManually) {
        const newLocation = await getLocation(currentManualLocation);

        if (!newLocation) return;

        setLocation(newLocation[0]);
      }
    }

    handleGetNewLocation();
  }, [location, currentManualLocation, isAutoLocation, isGeolocationRefused, lastLocationSearch]);

  return { location, setIsAutoLocation };
}
