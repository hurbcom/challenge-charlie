import { useEffect, useState } from 'react';

import { getCurrentPosition } from '../helpers/getCurrentPosition';

interface ICurrentPosition {
  lat: number;
  lon: number;
}

export const useCurrentPosition = () => {
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const getLatLong = async () => {
    setLoading(true);
    try {
      const {
        coords: { latitude: lat, longitude: lon },
      } = await getCurrentPosition();
      setCurrentPosition({ lat, lon });
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLatLong();
  }, []);

  return { currentPosition, setCurrentPosition, isLoading };
};
