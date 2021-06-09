import { useCallback, useEffect, useState } from 'react';

import { getIconByWeatherId } from '@helpers/getIconByWeatherId';
import { getColorByTemperature } from '@helpers/getColorByTemperature';
import { getTemperatureWithCelsius } from '@helpers/getTemperatureWithCelsius';
import { getCurrentPosition } from '@helpers/getCurrentPosition';
import { timestampTotHumanizeDateString } from '@helpers/getHumanizeDateString';

import useWeatherAPI from '@hooks/useWeatherAPI';
import useBingApi from '@hooks/useBingAPI';
import { useReverseGeocoding } from '@hooks/useReverseGeocoding';

import { DetailedWeather } from '@components/shared/DetailedWeather';
import { Input } from '@components/shared/Input';
import { ResumedWeather } from '@components/shared/ResumedWeather';
import { Footer } from '@components/shared/Footer';
import { Button } from '@components/shared/Button';
import { ResumedWeatherSkeleton } from '@components/shared/ResumedWeatherSkeleton';

import { TemperatureUnit } from '../../../global-types';

import { HomeStyled } from './style';

interface ICurrentPosition {
  lat: number;
  lon: number;
}

const Home = () => {
  const [addressInput, setAddressInput] = useState('');
  const [temperatureUnit, setCurrentTemperatureUnit] = useState<TemperatureUnit>('C');
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>();
  const [isLoading, setLoading] = useState(false);

  const { backgroundImage } = useBingApi();

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

  // Effects

  useEffect(() => {
    const storagedUserLocation = localStorage.getItem('USER_LOCATION');
    if (storagedUserLocation) {
      setCurrentPosition(JSON.parse(storagedUserLocation));
    }
  }, []);

  useEffect(() => {
    if (addressInfo.city && addressInfo.state) {
      setAddressInput(`${addressInfo.city}, ${addressInfo.state}`);
    } else if (addressInfo.city && !addressInfo.state) {
      setAddressInput(`${addressInfo.city}, ${addressInfo.country}`);
    }
  }, [addressInfo]);

  useEffect(() => {
    setLoading(isWeatherAPILoading || isReverseGeocodingLoading || !currentPosition);
  }, [isWeatherAPILoading, isReverseGeocodingLoading, currentPosition]);

  // Callbacks

  const onTemperatureClickHandler = useCallback((unit) => {
    setCurrentTemperatureUnit(unit);
  }, []);

  const onMyLocationButtonClickHandler = useCallback(async () => {
    try {
      setLoading(true);
      const {
        coords: { latitude: lat, longitude: lon },
      } = await getCurrentPosition();
      setCurrentPosition({ lat, lon });
      localStorage.setItem('USER_LOCATION', JSON.stringify({ lat, lon }));
    } catch (e) {
      //
    }
  }, []);

  return (
    <HomeStyled
      backgroundImage={backgroundImage}
      backgroundColor={getColorByTemperature(getTemperatureWithCelsius(averageTemperature, temperatureUnit))}
    >
      <Input
        value={addressInput}
        placeholder="Digite a localidade desejada"
        onChange={(event) => {
          setAddressInput(event.currentTarget.value);
        }}
        icon={require('@assets/icons/target.svg')}
        onKeyPress={async (event) => {
          if (event.key === 'Enter') {
            const data = await getWeatherByLocationName({ location: addressInput });
            setCurrentPosition({ lat: data.lat, lon: data.lon });
          }
        }}
      />
      <DetailedWeather
        temperature={weatherResume?.today.temperature}
        isLoading={isLoading}
        humidity={weatherResume?.today.humidity}
        windSpeed={weatherResume?.today.windSpeed}
        description={weatherResume?.today.description}
        pressure={weatherResume?.today.pressure}
        icon={getIconByWeatherId(weatherResume?.today.id)}
        temperatureUnit={temperatureUnit}
        onTemperatureClick={onTemperatureClickHandler}
      />
      <div className="home__resumed-weathers">
        {!isLoading ? (
          weatherResume?.days.map((day) => (
            <ResumedWeather
              key={day.date}
              description={timestampTotHumanizeDateString(day.date)}
              temperature={day.temperature}
              temperatureUnit={temperatureUnit}
              icon={getIconByWeatherId(day.id)}
              backgroundColor={getColorByTemperature(getTemperatureWithCelsius(averageTemperature, temperatureUnit))}
              onTemperatureClick={onTemperatureClickHandler}
            />
          ))
        ) : (
          <ResumedWeatherSkeleton
            backgroundColor={getColorByTemperature(getTemperatureWithCelsius(averageTemperature, temperatureUnit))}
          />
        )}
      </div>
      <div className="footer">
        <Footer>
          <Button text="Minha localização" onClick={onMyLocationButtonClickHandler} />
        </Footer>
      </div>
    </HomeStyled>
  );
};

export default Home;
