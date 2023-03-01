import React, { useContext, useEffect, useMemo, useState } from 'react';

import { WeatherInfoContext } from '../../contexts/WeatherInfoContext';
import { MeteoconsWebfontEnum } from '../../enums/MeteoconsWebfontEnum';
import convertWindDegreesToDirection from '../../utils/convertWindDegreesToDirection';
import { convertCelsiusToFahrenheit } from '../../utils/convertCelsiusToFahrenheit';

import * as S from './styles';

interface TemperaturesInterface {
  currentTemp: number;
  tomorrowTemp: number;
  afterTomorrowTemp: number;
}

const WeatherForecastInfo: React.FC = () => {
  const [isChangeThermometricScale, setIsChangeThermometricScale] = useState<boolean>(false);
  const [temperatures, setTemperatures] = useState<TemperaturesInterface>({
    currentTemp: 0,
    tomorrowTemp: 0,
    afterTomorrowTemp: 0
  });

  const { weatherInfo } = useContext(WeatherInfoContext);

  const { current, daily } = weatherInfo;

  console.log(`current?.weather`, current?.weather[0].description);

  useEffect(() => {
    console.log(`weatherInfo.daily`, weatherInfo.daily);
    if (!weatherInfo) return;

    setTemperatures({
      currentTemp: current?.temp,
      tomorrowTemp: daily?.tomorrowTempWeather.temp.day,
      afterTomorrowTemp: daily?.afterTomorrowTempWeather.temp.day
    });
  }, [weatherInfo]);

  useEffect(() => {
    if (!weatherInfo) return;

    if (isChangeThermometricScale) {
      setTemperatures({
        currentTemp: convertCelsiusToFahrenheit(current?.temp),
        tomorrowTemp: convertCelsiusToFahrenheit(daily?.tomorrowTempWeather.temp.day),
        afterTomorrowTemp: convertCelsiusToFahrenheit(daily?.afterTomorrowTempWeather.temp.day)
      });
      return;
    }

    setTemperatures({
      currentTemp: current?.temp,
      tomorrowTemp: daily?.tomorrowTempWeather.temp.day,
      afterTomorrowTemp: daily?.afterTomorrowTempWeather.temp.day
    });
  }, [isChangeThermometricScale]);

  const convertFloatTemperatureNumberToInteger = (floatNumberTemperature: number) => {
    if (floatNumberTemperature !== undefined) {
      const newIntegerTemperature = floatNumberTemperature.toFixed(0);
      return newIntegerTemperature;
    }
  };

  const windDirection = useMemo(() => {
    if (current?.wind_deg) {
      return convertWindDegreesToDirection(current?.wind_deg);
    }
  }, [current?.wind_deg]);

  const windSpeedInKilometers = useMemo(() => {
    if (current?.wind_speed) {
      return (current?.wind_speed * 3.6).toFixed(1);
    }
  }, [current?.wind_speed]);

  return (
    <S.Container>
      <main>
        <div className='icon-weather-wrapper'>
          <span data-icon={MeteoconsWebfontEnum[current?.weather[0].icon]} />
        </div>
        <div className='weather-info-wrapper '>
          <div
            className='weather-info-temperature'
            onClick={() => {
              setIsChangeThermometricScale(!isChangeThermometricScale);
            }}
          >
            <p>HOJE</p>
            <span>
              {convertFloatTemperatureNumberToInteger(temperatures?.currentTemp)}
              {!isChangeThermometricScale ? '°C' : '°F'}
            </span>
          </div>
          <div className='weather-info-details'>
            <h1>{current?.weather[0].description}</h1>
            <p>
              Vento: {windDirection} {windSpeedInKilometers}km/h
            </p>
            <p>Humidadade: {current?.humidity}%</p>
            <p>Pressão: {current?.pressure}hPA</p>
          </div>
        </div>
      </main>
      <footer>
        <div className='weather-info weather-tomorrow-info'>
          <div
            className='weather-info-wrapper'
            onClick={() => {
              setIsChangeThermometricScale(!isChangeThermometricScale);
            }}
          >
            <p>AMANHÃ</p>
            <span>
              {convertFloatTemperatureNumberToInteger(temperatures?.tomorrowTemp)}
              {!isChangeThermometricScale ? '°C' : '°F'}
            </span>
          </div>
        </div>
        <div className='weather-info weather-after-tomorrow-info'>
          <div
            className='weather-info-wrapper'
            onClick={() => {
              setIsChangeThermometricScale(!isChangeThermometricScale);
            }}
          >
            <p>DEPOIS DE AMANHÃ</p>
            <span>
              {convertFloatTemperatureNumberToInteger(temperatures?.afterTomorrowTemp)}
              {!isChangeThermometricScale ? '°C' : '°F'}
            </span>
          </div>
        </div>
      </footer>
    </S.Container>
  );
};

export default WeatherForecastInfo;
