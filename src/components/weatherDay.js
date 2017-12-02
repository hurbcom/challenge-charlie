import React from 'react';
import utils from '../utils';
import './weather-day.less';

const setColorTemperature = (temperature) => {
  if (temperature > 35) {
    return 'hot';
  } else if (temperature < 15) {
    return 'cold';
  } else {
    return 'sunny';
  }
}

const changeWeather = (props) => {
  if (props.changeWeather) {
    props.changeWeather();
  }
}

export default (props) => {
  const tempCelsius = props.temperature
  const tempFahrenheit = utils.convertTemperature(props.temperature, 'f')
  return (
    <section className={`weather-day ${setColorTemperature(props.temperature)}`}>
      <div className='icon-container'>
        {props.code && <i data-icon={props.code} />}
      </div>
      <div className='weather-container'>
        <div className='weather-temp' onClick={() => changeWeather(props)}>
          <h3>{props.day}</h3>
          <p className='temperature'>{props.type === 'c' ? `${tempCelsius}ºC` : `${tempFahrenheit}ºF`}</p>
        </div>
        {props.children}
      </div>
    </section>
  )
}