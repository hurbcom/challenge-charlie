import { useEffect, useState } from 'react';

import { getCurrentPosition } from '../../../helpers/getCurrentPosition';

import useWeatherAPI from '../../../hooks/useWeatherAPI';
import useBingApi from '../../../hooks/useBingAPI';

import { DetailedWeather } from '../../shared/DetailedWeather';
import { Input } from '../../shared/Input';

import { HomeStyled } from './style';

interface ICurrentPosition {
  lat: number;
  lon: number;
}

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>();

  const { backgroundImage } = useBingApi();

  useWeatherAPI({ ...currentPosition, lang: navigator.language.toLowerCase(), units: 'metric' });

  const getLongLat = async () => {
    const {
      coords: { latitude: lat, longitude: lon },
    } = await getCurrentPosition();
    setCurrentPosition({ lat, lon });
  };

  useEffect(() => {
    getLongLat();
  }, []);

  return (
    <HomeStyled backgroundImage={backgroundImage}>
      <Input icon={require('../../../assets/icons/compass.svg')} />
      <DetailedWeather />
    </HomeStyled>
  );
};

export default Home;
