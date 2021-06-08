import { useCallback, useEffect, useState } from 'react';

import { getIconByWeatherId } from '../../../helpers/getIconByWeatherId';
import { getColorByTemperature } from '../../../helpers/getColorByTemperature';
import { getTemperatureWithCelsius } from '../../../helpers/getTemperatureWithCelsius';

import useWeatherAPI from '../../../hooks/useWeatherAPI';
import useBingApi from '../../../hooks/useBingAPI';
import { useReverseGeocoding } from '../../../hooks/useReverseGeocoding';
import { useCurrentPosition } from '../../../hooks/useCurrentCoordinates';

import { DetailedWeather } from '../../shared/DetailedWeather';
import { Input } from '../../shared/Input';
import { ResumedWeather } from '../../shared/ResumedWeather';

import { HomeStyled } from './style';
import { TemperatureUnit } from '../../../global-types';

const Home = () => {
  const [addressInput, setAddressInput] = useState('');
  const [temperatureUnit, setCurrentTemperatureUnit] = useState<TemperatureUnit>('C');

  const { backgroundImage } = useBingApi();
  const { currentPosition, setCurrentPosition, isLoading: isLoadingCurrentPosition } = useCurrentPosition();

  const { addressInfo, isLoading: isReverseGeocodingLoading } = useReverseGeocoding({
    lat: currentPosition?.lat,
    lon: currentPosition?.lon,
  });

  const {
    weatherResume,
    averageTemperature,
    getWeatherByLocationName,
    isLoading: isWeatherAPILoading,
  } = useWeatherAPI({
    ...currentPosition,
    temperatureUnit,
  });

  const onTemperatureClickHandler = useCallback(() => {
    if (temperatureUnit === 'C') setCurrentTemperatureUnit('F');
    if (temperatureUnit === 'F') setCurrentTemperatureUnit('C');
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
      backgroundColor={getColorByTemperature(getTemperatureWithCelsius(averageTemperature, temperatureUnit))}
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
        isLoading={isWeatherAPILoading || isReverseGeocodingLoading || isLoadingCurrentPosition}
        humidity={weatherResume?.current.humidity}
        windSpeed={weatherResume?.current.windSpeed}
        description={weatherResume?.current.description}
        pressure={weatherResume?.current.pressure}
        icon={getIconByWeatherId(weatherResume?.current.id)}
        temperatureUnit={temperatureUnit}
        onTemperatureClick={onTemperatureClickHandler}
      />
      <div className="home__resumed-weathers">
        <ResumedWeather
          isLoading={isWeatherAPILoading || isReverseGeocodingLoading || isLoadingCurrentPosition}
          description="Amanhã"
          temperature={weatherResume?.tomorrow.temperature}
          temperatureUnit={temperatureUnit}
          icon={getIconByWeatherId(weatherResume?.tomorrow.id)}
          backgroundColor={getColorByTemperature(getTemperatureWithCelsius(averageTemperature, temperatureUnit))}
          onTemperatureClick={onTemperatureClickHandler}
        />
        <ResumedWeather
          isLoading={isWeatherAPILoading || isReverseGeocodingLoading || isLoadingCurrentPosition}
          description="Depois de Amanhã"
          temperature={weatherResume?.afterTomorrow.temperature}
          temperatureUnit={temperatureUnit}
          icon={getIconByWeatherId(weatherResume?.afterTomorrow.id)}
          backgroundColor={getColorByTemperature(getTemperatureWithCelsius(averageTemperature, temperatureUnit))}
          onTemperatureClick={onTemperatureClickHandler}
        />
      </div>
    </HomeStyled>
  );
};

export default Home;
