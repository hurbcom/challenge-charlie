import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react';

export interface Coords {
  latitude: number | null;
  longitude: number | null;
}
interface IGeolocationContext {
  coords: Coords;
}

const GeolocationContext = createContext<IGeolocationContext>(
  {} as IGeolocationContext,
);

const GeolocationProvider: React.FC = ({ children }) => {
  const [positionCoords, setPositionCoords] = useState<Coords>({} as Coords);

  const getCoordsErrorCallback = useCallback(error => {
    switch (error.code) {
      case 2:
      case 3:
        window.alert(
          'Não foi possível determinar sua localização, tente novamente em alguns instantes',
        );
        break;
      default:
    }
  }, []);

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      return;
    }

    navigator.geolocation.getCurrentPosition(position => {
      setPositionCoords(position.coords);
    }, getCoordsErrorCallback);
  }, [getCoordsErrorCallback]);

  const coords = useMemo(() => {
    if (typeof positionCoords.latitude !== undefined) {
      return positionCoords;
    }

    return { latitude: null, longitude: null };
  }, [positionCoords]);

  return (
    <GeolocationContext.Provider value={{ coords }}>
      {children}
    </GeolocationContext.Provider>
  );
};

function useGeolocation(): IGeolocationContext {
  const context = useContext(GeolocationContext);

  if (!context) {
    throw new Error('useGeolocation must be used within a GeolocationProvider');
  }

  return context;
}

export { GeolocationProvider, useGeolocation };
