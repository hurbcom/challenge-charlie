import React from 'react';
import { TemperatureContext } from '../context/TemperatureContext';
import './style/Tomorrow.css';

const Tomorrow = ({ tomorrowTemp }) => {
  const temperatureContext = React.useContext(TemperatureContext);

  return (
    <div className="tomorrow">
      <div className="tomorrow__info">
        <p className="tomorrow__info__title">Amanhã</p>
        <p className="tomorrow__info__temperature">
          {tomorrowTemp
            ? `${Math.round(tomorrowTemp)}${temperatureContext.isFarenheit ? '°F' : '°C'}`
            : 'Carregando...'}
        </p>
      </div>
    </div>
  );
};

export default Tomorrow;
