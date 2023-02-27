import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState } from 'react';

import { getLocation } from '~/services';
import { Location, Weather } from '~/@types';
import { InputHandleProps } from '~/components/Search';

export interface UseGetUserLocationProps {
  isLoading: boolean;
  currentManualLocation: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  elementToFocus?: RefObject<InputHandleProps> | null;
  setCurrentManualLocation: Dispatch<SetStateAction<string>>;
  setWeatherForecast: Dispatch<SetStateAction<Weather[] | null>>;
}

export function useGetUserLocation({
  isLoading,
  setIsLoading,
  elementToFocus,
  setWeatherForecast,
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

    const currentLocation = await getLocation({
      location: `${newCoordinates.latitude}+${newCoordinates.longitude}`,
    });

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
      const isDifferentInput = !!currentManualLocation && currentManualLocation !== lastLocationSearch;

      const isUserManuallyChangeLocation = !!location && !isAutoLocation && isDifferentInput;
      const isUserRefusesGeolocationAndChangeManually = isGeolocationRefused && isDifferentInput;

      if (!isLoading && (isUserManuallyChangeLocation || isUserRefusesGeolocationAndChangeManually)) {
        setIsLoading(true);

        const newLocation = await getLocation({
          location: currentManualLocation,
          failureAction: () => {
            setIsLoading(false);
            setWeatherForecast(null);
          },
        });

        setLastLocationSearch(currentManualLocation);

        if (!newLocation) return;

        setLocation(newLocation[0]);
      }
    }

    handleGetNewLocation();
  }, [
    location,
    isLoading,
    setIsLoading,
    isAutoLocation,
    setWeatherForecast,
    lastLocationSearch,
    isGeolocationRefused,
    currentManualLocation,
  ]);

  return { location, setIsAutoLocation };
}
