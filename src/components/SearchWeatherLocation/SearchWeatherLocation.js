import React from 'react';
import WeatherService from '../../services/WeatherService';
import SearchLocation from '../SearchLocation';
import { useWeatherDispatch } from '../../contexts/WeatherContext';

export default () => {

  const dispatch = useWeatherDispatch();

  function onLocationChange(location){
    new WeatherService().getWeatherByCoord(location.lat, location.lng).then(weather => {
      dispatch({ 
        type: "UPDATE_WEATHER", 
        data: {
          weather: weather
        }
      });
    });
  }

  return (
    <SearchLocation
      onLocationChange={location => onLocationChange(location)}
    ></SearchLocation>
  )
}