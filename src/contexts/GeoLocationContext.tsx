import React, {
  createContext,
  type ReactNode,
  useState,
  useEffect,
} from 'react';

import type GeoLocationInterface from '../interfaces/GeoLocationInterface';
import getLocationNameByGeoCoordinates from '../services/getLocationNameByGeoCoordinates';

interface GeoLocationProviderProps {
  children: ReactNode;
}

export interface GeoLocationContextData {
  geoLocation: GeoLocationInterface;
  setGeoLocation: (geoLocation: GeoLocationInterface) => void;
}

export const GeoLocationContext = createContext<GeoLocationContextData>(
  {} as GeoLocationContextData,
);

export function GeoLocationProvider({ children }: GeoLocationProviderProps) {
  const [geoLocation, setGeoLocation] = useState<GeoLocationInterface>(
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    {} as GeoLocationInterface,
  );

  async function handleGetLocationNameByGeoCoordinatesData(): Promise<void> {
    // console.log(`Home - latitude`, geoLocation.latitude);
    // console.log(`Home - longitude`, geoLocation.longitude);

    const response = await getLocationNameByGeoCoordinates({
      latitude: geoLocation.latitude,
      longitude: geoLocation.longitude,
    });

    if (response)
      setGeoLocation({
        ...geoLocation,
        locationName: `${response.city}, ${response.state}`,
      });
  }

  useEffect(() => {
    if (geoLocation.latitude && geoLocation.longitude) {
      handleGetLocationNameByGeoCoordinatesData();
    }
  }, [geoLocation.latitude, geoLocation.longitude]);

  return (
    <GeoLocationContext.Provider value={{ geoLocation, setGeoLocation }}>
      {children}
    </GeoLocationContext.Provider>
  );
}
