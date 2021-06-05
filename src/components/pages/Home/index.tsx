import { useEffect, useState } from 'react';

import { getCurrentPosition } from '../../../helpers/getCurrentPosition';

import useWeatherAPI from '../../../hooks/useWeatherAPI';
import useBingApi from '../../../hooks/useBingAPI';
import { useReverseGeocoding } from '../../../hooks/useReverseGeocoding';

import { DetailedWeather } from '../../shared/DetailedWeather';
import { Input } from '../../shared/Input';
import { ResumedWeather } from '../../shared/ResumedWeather';

import { HomeStyled } from './style';

interface ICurrentPosition {
  lat: number;
  lon: number;
}

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>();
  const [addressInput, setAddressInput] = useState('');

  const { backgroundImage } = useBingApi();
  const { addressInfo } = useReverseGeocoding({
    lat: currentPosition?.lat,
    lon: currentPosition?.lon,
  });
  const { weatherResume } = useWeatherAPI({
    ...currentPosition,
    lang: navigator.language.toLowerCase(),
    units: 'metric',
  });

  const getLongLat = async () => {
    const {
      coords: { latitude: lat, longitude: lon },
    } = await getCurrentPosition();
    setCurrentPosition({ lat, lon });
  };

  useEffect(() => {
    getLongLat();
  }, []);

  useEffect(() => {
    if (addressInfo.city) {
      setAddressInput(`${addressInfo.city}, ${addressInfo.state}`);
    }
  }, [addressInfo]);

  return (
    <HomeStyled backgroundImage={backgroundImage}>
      <Input
        value={addressInput}
        onChange={(event) => {
          setAddressInput(event.currentTarget.value);
        }}
        icon={require('../../../assets/icons/compass.svg')}
      />
      <DetailedWeather
        temp={weatherResume?.current.temp}
        humidity={weatherResume?.current.humidity}
        windSpeed={weatherResume?.current.windSpeed}
        description={weatherResume?.current.description}
        pressure={weatherResume?.current.pressure}
      />
      <div className="home__resumed-weathers">
        <ResumedWeather
          description="Amanhã"
          temperature={weatherResume?.tomorrow.temp}
          icon={require('../../../assets/icons/3.svg')}
        />
        <ResumedWeather
          description="Depois de Amanhã"
          temperature={weatherResume?.afterTomorrow.temp}
          icon={require('../../../assets/icons/3.svg')}
        />
      </div>
    </HomeStyled>
  );
};

export default Home;
