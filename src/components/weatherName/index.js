import React from 'react';

//Style import
import { Name } from './style';

const WeatherName = (props) => {
  const weatherData = [
    {name: 'clear-day', weather: 'Ensolarado'},
    {name: 'clear-night', weather: 'Noite limpa'},
    {name: 'cloudy', weather: 'Nublado'},
    {name: 'fog', weather: 'Névoa'},
    {name: 'partly-cloudy-day', weather: 'Parcialmente nublado'},
    {name: 'partly-cloudy-night', weather: 'Parcialmente nublado'},
    {name: 'rain', weather: 'Chuva'},
    {name: 'snow', weather: 'Neve'},
    {name: 'wind', weather: 'Corrente de vento'},
  ]
  return(
    <React.Fragment>
      {weatherData.filter(item => {
        return item.name === props.weatherName
      }).map((icon, i) => <Name key={i}>{icon.weather}</Name>)}
    </React.Fragment>
  );
};

export default WeatherName;