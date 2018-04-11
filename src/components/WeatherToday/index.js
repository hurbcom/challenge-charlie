// Flow
import React from 'react';
import PropTypes from 'prop-types';

const WeatherToday = ({
  temperature,
  condition,
  windSpeed,
  humidity,
  pressure,
  icon,
  onClick,
}) => (
  <div className="weather-today">
    <div className="weather-icon-status">
      <i className="icon icon-status" data-icon={icon} />
    </div>
    <div className="weather-today-info">
      <div className="weather-distance">
        <h3 className="uppercase font-weight-normal">Hoje</h3>
        <h3
          className="uppercase font-weight-normal hover-default"
          onClick={onClick}
        >
          {temperature}
        </h3>
      </div>
      <div className="weather-distance">
        <h5 className="uppercase font-weight-normal">{condition}</h5>
      </div>
      <div className="weather-distance">
        <h5 className="uppercase font-weight-normal">
          Vento: {windSpeed} km/h
        </h5>
      </div>
      <div className="weather-distance">
        <h5 className="uppercase font-weight-normal">Pressão: {humidity}%</h5>
      </div>
      <div className="weather-distance">
        <h5 className="uppercase font-weight-normal">Vento: {pressure}hPA</h5>
      </div>
    </div>
  </div>
);
WeatherToday.propTypes = {
  temperature: PropTypes.string,
  condition: PropTypes.string,
  windSpeed: PropTypes.number,
  humidity: PropTypes.string,
  icon: PropTypes.string,
  pressure: PropTypes.string,
  onClick: PropTypes.func,
};
WeatherToday.defaultProps = {
  temperature: null,
  condition: null,
  windSpeed: null,
  humidity: null,
  pressure: null,
  icon: null,
  onClick: null,
};
export default WeatherToday;
