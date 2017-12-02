import React from 'react';
import utils from '../utils';
import './weather-day.less';

const setColorTemperature = (temperature) => {
  if (temperature > 35) {
    return 'hot'
  } else if (temperature < 15) {
    return 'cold'
  } else {
    return 'sunny'
  }
}

export default (props) => {
  if (props.temperature) {
    const tempCelsius = props.temperature
    const tempFahrenheit = utils.convertTemperature(props.temperature, 'f')

    return (
      <section className={`weather-day ${setColorTemperature(props.temperature)}`}>
        <div className='icon-container'>
          {props.code && <i data-icon={props.code} />}
        </div>
        <div className='weather-container'>
          <div className='weather-temp'>
            <h3>{props.day}</h3>
            <p className='temperature'>{props.type === 'c' ? `${tempCelsius}ºC` : `${tempFahrenheit}ºF`}</p>
          </div>
          {props.children}
        </div>
      </section>
    )
  } else {
    return (
      <div className='weather-empty' />
    )
  }
}