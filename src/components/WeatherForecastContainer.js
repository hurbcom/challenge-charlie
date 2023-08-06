import React from 'react';

const WeatherForecastContainer = (props) => {
  const forecastEmpty = {
    today: '',
    tomorrow: '',
    dayAfterTomorrow: '',
  };
  const { forecast } = props;

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
            <p>{temp}</p>
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
