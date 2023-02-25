import React from 'react';

import * as S from './styles';

const WeatherForecastInfo: React.FC = () => {
  return (
    <S.Container>
      <main>
        <p>HOJE</p>
        <span>23 C</span>
      </main>
      <footer>
        <div className="weather-tomorrow-info">
          <p>AMANHA</p>
          <span>25C</span>
        </div>
        <div className="weather-after-tomorrow-info">
          <p>DEPOIS DE AMANHA</p>
          <span>22 C</span>
        </div>
      </footer>
    </S.Container>
  );
};

export default WeatherForecastInfo;
