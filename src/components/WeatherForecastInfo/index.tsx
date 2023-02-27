import React, { useContext, useEffect } from 'react';

import { MeteoconsWebfontEnum } from '../../enums/MeteoconsWebfontEnum';
import { WeatherInfoContext } from '../../contexts/WeatherInfoContext';

import * as S from './styles';

const WeatherForecastInfo: React.FC = () => {
  const { weatherInfo } = useContext(WeatherInfoContext);
  const { current } = weatherInfo;

  useEffect(() => {
    console.log(`weatherInfo`, weatherInfo);
  }, []);

  return (
    <S.Container>
      <main>
        <div className="icon-weather-wrapper">
          <span data-icon={MeteoconsWebfontEnum.sunny} />
        </div>
        <div className="weather-info-wrapper ">
          <div className="weather-info-temperature">
            <p>HOJE</p>
            <span>{current?.temp}° C</span>
          </div>
          <div className="weather-info-details">
            <h1>Ensolarado</h1>
            <p>Vento: NO {current?.wind_speed} 6.4km/h</p>
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
