import React, { useEffect, useState } from 'react';
import tempConverter from '../utils/temperatureConverter';

import style from '../style/WeatherForecastContainer.module.css';

const WeatherForecastContainer = (props) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const forecastEmpty = {
    today: '',
    tomorrow: '',
    dayAfterTomorrow: '',
  };
  const { forecast } = props;

  useEffect(() => {
    setIsCelsius(true);
  }, [forecast]);

  const handleClick = () => {
    setIsCelsius(!isCelsius);
    tempConverter(forecast, isCelsius);
  };

  if (!forecast) {
    return (
      <>
        {Object.keys(forecastEmpty).map((day, index) => {
          return <div></div>;
        })}
      </>
    );
  }
  return (
    forecast &&
    Object.keys(forecast).map((day, index) => {
      const { temp, description, icon, wind, pressure, humidity } = forecast[day];
      return (
        <>
          <div key={day}>
            {day === 'today' ? <p>HOJE</p> : ''}
            {day === 'tomorrow' ? <p>AMANHÃ</p> : ''}
            {day === 'dayAfterTomorrow' ? <p>DEPOIS DE AMANHÃ</p> : ''}
            <p className={style.forecastContainer__temp} onClick={handleClick}>
              {temp}
            </p>
            <p>{description}</p>
            {wind && (
              <ul>
                <li>Vento: {wind}</li>
                <li>Pressão: {pressure}</li>
                <li>Humidade: {humidity}</li>
              </ul>
            )}
          </div>
        </>
      );
    })
  );
};
export default WeatherForecastContainer;
