import React from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import './style/Today.css';

const Today = ({ forecast }) => {
  return (
    <div className="today">
      <div className="today__icon-container">
        <WbSunnyOutlinedIcon style={{ fontSize: '180px' }} />
      </div>
      <div className="today__info">
        <p className="today__info__title">Hoje</p>
        <p className="today__info__temperature">{Math.round(forecast.temperature)}°C</p>
        <p className="today__info__wheater">{forecast.weather}</p>
        <p>Vento: {forecast.windSpeed} km/h</p>
        <p>Humidade: {forecast.humidity}%</p>
        <p>Pressão: {forecast.pressure} hPA</p>
      </div>
    </div>
  );
};

export default Today;
