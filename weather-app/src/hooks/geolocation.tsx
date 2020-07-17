import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
} from 'react';

interface Coords {
  latitude: number;
  longitude: number;
}

const GeolocationContext = createContext<Coords>({} as Coords);

const GeolocationProvider: React.FC = ({ children }) => {
  const [coords, setCoords] = useState<Coords>({} as Coords);

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
      setCoords(position.coords);
    }, getCoordsErrorCallback);
  }, [getCoordsErrorCallback]);

  return (
    <GeolocationContext.Provider value={coords}>
      {children}
    </GeolocationContext.Provider>
  );
};

function useGeolocation(): Coords {
  const context = useContext(GeolocationContext);

  if (!context) {
    throw new Error('useGeolocation must be used within a GeolocationProvider');
  }

  return context;
}

export { GeolocationProvider, useGeolocation };
