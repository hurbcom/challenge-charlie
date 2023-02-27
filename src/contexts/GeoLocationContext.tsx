import React, { createContext, type ReactNode, useState } from 'react';

import type GeoLocationInterface from '../interfaces/GeoLocationInterface';

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

  return (
    <GeoLocationContext.Provider value={{ geoLocation, setGeoLocation }}>
      {children}
    </GeoLocationContext.Provider>
  );
}
