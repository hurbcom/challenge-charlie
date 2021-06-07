import { useCallback, useEffect, useState } from 'react';

import { getCurrentPosition } from '../../../helpers/getCurrentPosition';
import { getIconByWeatherId } from '../../../helpers/getIconByWeatherId';
import { getColorByTemperature } from '../../../helpers/getGradientByTemp';
import { getTemperatureWithCelsius } from '../../../helpers/getTemperatureWithCelsius';

import useWeatherAPI from '../../../hooks/useWeatherAPI';
import useBingApi from '../../../hooks/useBingAPI';
import { useReverseGeocoding } from '../../../hooks/useReverseGeocoding';

import { DetailedWeather } from '../../shared/DetailedWeather';
import { Input } from '../../shared/Input';
import { ResumedWeather } from '../../shared/ResumedWeather';

import { HomeStyled } from './style';
import { TemperatureUnit } from '../../../global-types';

interface ICurrentPosition {
  lat: number;
  lon: number;
}

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>();
  const [addressInput, setAddressInput] = useState('');
  const [temperatureUnit, setCurrentTemperatureUnit] = useState<TemperatureUnit>('C');

  const { backgroundImage } = useBingApi();

  const { addressInfo } = useReverseGeocoding({
    lat: currentPosition?.lat,
    lon: currentPosition?.lon,
  });

  const { weatherResume, averageTemperature, getWeatherByLocationName } = useWeatherAPI({
    ...currentPosition,
    temperatureUnit,
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
      setAddressInput(`${addressInfo.city}, ${addressInfo.country}`);
    }
  }, [addressInfo]);

  return (
    <HomeStyled
      backgroundImage={backgroundImage}
      backgroundColor={getColorByTemperature(
        getTemperatureWithCelsius(averageTemperature, temperatureUnit),
      )}
    >
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
        temperature={weatherResume?.current.temperature}
        humidity={weatherResume?.current.humidity}
        windSpeed={weatherResume?.current.windSpeed}
        description={weatherResume?.current.description}
        pressure={weatherResume?.current.pressure}
        icon={getIconByWeatherId(weatherResume?.current.id)}
        temperatureUnit={temperatureUnit}
        onTemperatureClick={() => {
          if (temperatureUnit === 'C') setCurrentTemperatureUnit('F');
          if (temperatureUnit === 'F') setCurrentTemperatureUnit('C');
        }}
      />
      <div className="home__resumed-weathers">
        <ResumedWeather
          description="Amanhã"
          temperature={weatherResume?.tomorrow.temperature}
          temperatureUnit={temperatureUnit}
          icon={getIconByWeatherId(weatherResume?.tomorrow.id)}
          backgroundColor={getColorByTemperature(
            getTemperatureWithCelsius(averageTemperature, temperatureUnit),
          )}
        />
        <ResumedWeather
          description="Depois de Amanhã"
          temperature={weatherResume?.afterTomorrow.temperature}
          temperatureUnit={temperatureUnit}
          icon={getIconByWeatherId(weatherResume?.afterTomorrow.id)}
          backgroundColor={getColorByTemperature(
            getTemperatureWithCelsius(averageTemperature, temperatureUnit),
          )}
        />
      </div>
    </HomeStyled>
  );
};

export default Home;
