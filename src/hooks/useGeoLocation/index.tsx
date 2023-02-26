import React, {
  createContext,
  type ReactNode,
  useState,
  useContext,
} from 'react';

import type GeoLocationInterface from '../../interfaces/GeoLocationInterface';

interface GeoLocationProviderProps {
  children: ReactNode;
}

interface GeoLocationContextData {
  geoLocation: GeoLocationInterface;
  setLatitude: React.Dispatch<React.SetStateAction<number>>;
  setLongitude: React.Dispatch<React.SetStateAction<number>>;
}

export const GeoLocationContext = createContext<GeoLocationContextData>(
  {} as GeoLocationContextData,
);

export function GeoLocationProvider({ children }: GeoLocationProviderProps) {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  return (
    <GeoLocationContext.Provider
      value={{ latitude, longitude, setLatitude, setLongitude }}
    >
      {children}
    </GeoLocationContext.Provider>
  );
}

export function useGeoLocation() {
  const context = useContext(GeoLocationContext);
  return context;
}
