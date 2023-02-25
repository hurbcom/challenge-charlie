import React from 'react';
import { MeteoconsWebfontEnum } from '../../enums/MeteoconsWebfontEnum';

import * as S from './styles';

const WeatherForecastInfo: React.FC = () => {
  return (
    <S.Container>
      <main>
        <div className="icon-weather-wrapper">
          <p className="icon-weather" data-icon={MeteoconsWebfontEnum.sunny} />
        </div>
        <div className="info-weather-wrapper">
          <div>
            <p>HOJE</p>
            <span>23 C</span>
          </div>
          <div>
            <p>Ensolarado</p>
          </div>
          <dir>
            <p>Vento: NO 6.4km/h</p>
            <p>Humidadade: 78%</p>
            <p>Pressão: 1003hPA</p>
          </dir>
        </div>
      </main>
      <footer>
        <div className="weather-tomorrow-info">
          <div>
            <p>AMANHA</p>
            <span>25C</span>
          </div>
        </div>
        <div className="weather-after-tomorrow-info">
          <div>
            <p>DEPOIS DE AMANHA</p>
            <span>22 C</span>
          </div>
        </div>
      </footer>
    </S.Container>
  );
};

export default WeatherForecastInfo;
