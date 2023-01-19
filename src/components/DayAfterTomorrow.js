import React from 'react';
import './style/DayAfterTomorrow.css';

const DayAfterTomorrow = ({ dayAfterTemp }) => {
  return (
    <div className="day-after-tomorrow">
      <div className="day-after-tomorrow__info">
        <p className="day-after-tomorrow__info__title">Depois de Amanha</p>
        <p className="day-after-tomorrow__info__temperature">{Math.round(dayAfterTemp)}°C</p>
      </div>
    </div>
  );
};

export default DayAfterTomorrow;
