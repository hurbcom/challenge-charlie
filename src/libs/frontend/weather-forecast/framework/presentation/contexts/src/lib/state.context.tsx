import { LocationOverview } from '@challenge-charlie/frontend/weather-forecast/enterprise/entities';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { CustomerLocationChangedEventEmitterController } from 'src/libs/frontend/custom-events/adapter/controllers/src/lib/customer-location-changed-event-emitter.controller';
import { ControllersContext } from './controllers.context';

type StateContextContract = {
  fetchingLocation: boolean;
  location?: LocationOverview;
  userDeniedLocation: boolean;
  address: string;
  getLocationByAddress?: () => Promise<void>;
  getLocationByCoordinates?: () => Promise<void>;
  changeLocation: () => Promise<void>;
  addressInputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  handleError: (message: string) => void;
  getColorByTemp: (temp: number) => string;
};

const initialValue: StateContextContract = {
  fetchingLocation: true,
  userDeniedLocation: false,
  address: '',
  error: '',
  changeLocation: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
  addressInputOnChange: function (
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    throw new Error('Function not implemented.');
  },
  handleError: function (message: string): void {
    throw new Error('Function not implemented.');
  },
  getColorByTemp: function (temp: number): string {
    throw new Error('Function not implemented.');
  },
};

export const StateContext =
  React.createContext<StateContextContract>(initialValue);

export type StateContextProviderProps = {
  children: JSX.Element;
};

export function StateContextProvider(props: StateContextProviderProps) {
  const customerLocationChangedEventEmitterController =
    new CustomerLocationChangedEventEmitterController();

  const { getCurrentUserLocationController, getLocationByAddressController } =
    useContext(ControllersContext);

  const [fetchingLocation, setFetchingLocation] = useState<boolean>(
    initialValue.fetchingLocation
  );

  const [location, setLocation] = useState<LocationOverview | undefined>(
    initialValue.location
  );

  const [address, setAddress] = useState<string>(initialValue.address);

  const [userDeniedLocation, setUserDeniedLocation] = useState<boolean>(
    initialValue.userDeniedLocation
  );

  const [error, setError] = useState<string>('');

  const tryGetCurrentUserLocation = useCallback(async () => {
    try {
      const { location } = await getCurrentUserLocationController.execute();
      setError('');
      setLocation(location);

      customerLocationChangedEventEmitterController.execute({
        currency: location.currency,
      });
    } catch (err: any) {
      switch (err.code) {
        case 1: // User denied Geolocation
          setUserDeniedLocation(true);
          break;
        default:
          console.log(err);
          // Unhandled exception
          break;
      }
    } finally {
      setFetchingLocation(false);
    }
  }, [getCurrentUserLocationController]);

  useEffect(() => {
    tryGetCurrentUserLocation();
  }, [tryGetCurrentUserLocation]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        () => {
          setUserDeniedLocation(false);
        },
        () => {
          setUserDeniedLocation(true);
        }
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  async function getLocationByAddress() {
    try {
      setFetchingLocation(true);

      const { location } = await getLocationByAddressController.execute({
        address,
      });

      setError('');
      setLocation(location);

      customerLocationChangedEventEmitterController.execute({
        currency: location.currency,
      });
    } catch (err: any) {
      console.log(
        '🚀 ~ file: state.context.tsx:81 ~ getLocationByAddress ~ err',
        err
      );

      setError(err.message);
    } finally {
      setFetchingLocation(false);
    }
  }

  async function changeLocation() {
    setLocation(undefined);
  }

  function addressInputOnChange(e: ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }

  function handleError(message: string) {
    setError(message);
  }

  function getColorByTemp(temp: number) {
    if (temp > 35) {
      return 'red';
    }

    if (temp < 16) {
      return 'blue';
    }

    return 'yellow';
  }

  return (
    <StateContext.Provider
      value={{
        fetchingLocation,
        location,
        address,
        userDeniedLocation,
        getLocationByAddress,
        changeLocation,
        addressInputOnChange,
        handleError,
        error,
        getLocationByCoordinates: tryGetCurrentUserLocation,
        getColorByTemp,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
