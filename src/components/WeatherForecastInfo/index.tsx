import React from 'react';
import { MeteoconsWebfontEnum } from '../../enums/MeteoconsWebfontEnum';

import * as S from './styles';

const WeatherForecastInfo: React.FC = () => {
  return (
    <S.Container>
      <main>
        <div className="icon-weather-wrapper">
          <span data-icon={MeteoconsWebfontEnum.sunny} />
        </div>
        <div className="weather-info-wrapper ">
          <div className="weather-info-temperature">
            <p>HOJE</p>
            <span>32° C</span>
          </div>
          <div className="weather-info-details">
            <h1>Ensolarado</h1>
            <p>Vento: NO 6.4km/h</p>
            <p>Humidadade: 78%</p>
            <p>Pressão: 1003hPA</p>
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
