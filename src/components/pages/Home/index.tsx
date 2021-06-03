import { useEffect, useState } from 'react';
import { getCurrentPosition } from '../../../helpers/getCurrentPosition';
import useWeatherAPI from '../../../hooks/useWeatherAPI';
import useBingApi from '../../../hooks/useBingAPI';

interface ICurrentPosition {
  lat: number;
  lon: number;
}

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>();

  const getLongLat = async () => {
    const {
      coords: { latitude: lat, longitude: lon },
    } = await getCurrentPosition();
    setCurrentPosition({ lat, lon });
  };

  useEffect(() => {
    getLongLat();
  }, []);

  useBingApi();
  useWeatherAPI({ ...currentPosition, lang: navigator.language.toLowerCase(), units: 'metric' });

  return <>Hurb Challenge</>;
};

export default Home;
