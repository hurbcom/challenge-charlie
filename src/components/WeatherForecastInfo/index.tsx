import React, { useContext, useEffect, useMemo } from 'react';

import { WeatherInfoContext } from '../../contexts/WeatherInfoContext';
import { MeteoconsWebfontEnum } from '../../enums/MeteoconsWebfontEnum';
import convertWindDegreesToDirection from '../../utils/convertWindDegreesToDirection';

import * as S from './styles';

const WeatherForecastInfo: React.FC = () => {
  const { weatherInfo } = useContext(WeatherInfoContext);
  const { current } = weatherInfo;

  useEffect(() => {
    console.log(`weatherInfo.daily`, weatherInfo.daily);
  }, [weatherInfo]);

  const convertFloatTemperatureNumberToInteger = (
    floatNumberTemperature: number,
  ) => {
    const newIntegerTemperature = floatNumberTemperature.toFixed(0);
    return newIntegerTemperature;
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
        <div className="icon-weather-wrapper">
          <span data-icon={MeteoconsWebfontEnum.sunny} />
        </div>
        <div className="weather-info-wrapper ">
          <div className="weather-info-temperature">
            <p>HOJE</p>
            <span>
              {current != null &&
                convertFloatTemperatureNumberToInteger(current?.temp)}
              °C
            </span>
          </div>
          <div className="weather-info-details">
            <h1>Ensolarado</h1>
            <p>
              Vento: {windDirection} {windSpeedInKilometers}km/h
            </p>
            <p>Humidadade: {current?.humidity}%</p>
            <p>Pressão: {current?.pressure}hPA</p>
          </div>
        </div>
      </main>
      <footer>
        <div className="weather-info weather-tomorrow-info">
          <div className="weather-info-wrapper">
            <p>AMANHÃ</p>
            <span>25°C</span>
          </div>
        </div>
        <div className="weather-info weather-after-tomorrow-info">
          <div className="weather-info-wrapper">
            <p>DEPOIS DE AMANHÃ</p>
            <span>22°C</span>
          </div>
        </div>
      </footer>
    </S.Container>
  );
};

export default WeatherForecastInfo;
