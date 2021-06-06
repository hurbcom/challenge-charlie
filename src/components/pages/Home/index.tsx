import { useCallback, useEffect, useState } from 'react';

import { getCurrentPosition } from '../../../helpers/getCurrentPosition';
import { getIconByWeatherId } from '../../../helpers/getIconByWeatherId';

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

  const { weatherResume, getWeatherByLocationName } = useWeatherAPI({
    ...currentPosition,
  });

  const getLongLat = useCallback(async () => {
    const {
      coords: { latitude: lat, longitude: lon },
    } = await getCurrentPosition();
    setCurrentPosition({ lat, lon });
  }, []);

  useEffect(() => {
    getLongLat();
  }, []);

  useEffect(() => {
    if (addressInfo.city && addressInfo.state) {
      setAddressInput(`${addressInfo.city}, ${addressInfo.state}`);
    } else if (addressInfo.city && !addressInfo.state) {
      setAddressInput(`${addressInfo.city}`);
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
        onKeyPress={async (event) => {
          if (event.key === 'Enter') {
            const data = await getWeatherByLocationName({ location: addressInput });
            setCurrentPosition({ lat: data.lat, lon: data.lon });
          }
        }}
      />
      <DetailedWeather
        temp={weatherResume?.current.temp}
        humidity={weatherResume?.current.humidity}
        windSpeed={weatherResume?.current.windSpeed}
        description={weatherResume?.current.description}
        pressure={weatherResume?.current.pressure}
        icon={getIconByWeatherId(weatherResume?.current.id)}
      />
      <div className="home__resumed-weathers">
        <ResumedWeather
          description="Amanhã"
          temperature={weatherResume?.tomorrow.temp}
          icon={getIconByWeatherId(weatherResume?.tomorrow.id)}
        />
        <ResumedWeather
          description="Depois de Amanhã"
          temperature={weatherResume?.afterTomorrow.temp}
          icon={getIconByWeatherId(weatherResume?.afterTomorrow.id)}
        />
      </div>
    </HomeStyled>
  );
};

export default Home;
