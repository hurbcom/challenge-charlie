// Flow
import React from 'react';
import PropTypes from 'prop-types';

const WeatherOther = ({ temp, day, onClick }) => (
  <div className="weather-week">
    <div className="weather-week-info">
      <h5 className="uppercase font-weight-normal hover-default">{day}</h5>
      <h5
        className="uppercase font-weight-normal hover-default"
        onClick={onClick}
      >
        {temp}
      </h5>
    </div>
  </div>
);

WeatherOther.propTypes = {
  temp: PropTypes.string,
  day: PropTypes.string,
  onClick: PropTypes.func,
};
WeatherOther.defaultProps = {
  temp: null,
  day: null,
  onClick: null,
};
export default WeatherOther;
