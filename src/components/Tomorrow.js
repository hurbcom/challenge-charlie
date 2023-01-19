import React from 'react';
import './style/Tomorrow.css';

const Tomorrow = ({ tomorrowTemp }) => {
  return (
    <div className="tomorrow">
      <div className="tomorrow__info">
        <p className="tomorrow__info__title">Amanhã</p>
        <p className="tomorrow__info__temperature">{Math.round(tomorrowTemp)}°C</p>
      </div>
    </div>
  );
};

export default Tomorrow;
