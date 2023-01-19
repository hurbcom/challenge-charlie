import React from 'react';
import { TemperatureContext } from '../context/TemperatureContext';
import './style/DayAfterTomorrow.css';

const DayAfterTomorrow = ({ dayAfterTemp }) => {
  const temperatureContext = React.useContext(TemperatureContext);

  return (
    <div className="day-after-tomorrow">
      <div className="day-after-tomorrow__info">
        <p className="day-after-tomorrow__info__title">Depois de Amanha</p>
        <p className="day-after-tomorrow__info__temperature">
          {dayAfterTemp
            ? `${Math.round(dayAfterTemp)}${temperatureContext.isFarenheit ? '°F' : '°C'}`
            : 'Carregando...'}
        </p>
      </div>
    </div>
  );
};

export default DayAfterTomorrow;
