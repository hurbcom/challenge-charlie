import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react';

interface Coords {
  latitude: number;
  longitude: number;
}
interface IGeolocationContext {
  coords: Coords | null;
}

const GeolocationContext = createContext<IGeolocationContext>(
  {} as IGeolocationContext,
);

const GeolocationProvider: React.FC = ({ children }) => {
  const [positionCoords, setPositionCoords] = useState<Coords>({} as Coords);

  const getCoordsErrorCallback = useCallback(error => {
    switch (error.code) {
      case 0:
        window.alert('Não foi possível obter sua localização');
        break;
      case 1:
        window.alert('Não é possível prosseguir sem permissão de localização');
        break;
      case 2:
      case 3:
      default:
        window.alert(
          'Não foi possível determinar sua localização, tente novamente em alguns instantes',
        );
    }
  }, []);

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      window.alert(
        'Sinto muito, mas seu navegador não suporta serviços de geolocalização',
      );
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

    return null;
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
