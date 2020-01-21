import React, { useEffect } from 'react';
import DayInfoView from './DayInfoView';
import { useWeatherState } from '../../contexts/WeatherContext';
import { useWeatherDayDispatch } from '../../contexts/WeatherDayContext';

//@TODO -> receber titulo e temperatura, icone
export default function DayInfo({title, day=0, complex=false}){

  const weatherDayDispatch = useWeatherDayDispatch();
  const weatherState = useWeatherState();
  const weatherList = weatherState.weatherList;
  const currentWeather = weatherList && weatherList.length > day ? weatherList[day] : undefined;

  useEffect(() => {
    weatherDayDispatch({
      type: 'UPDATE_TITLE', 
      data: {
        title: title
      }
    });
  }, [title]);

  useEffect(() => {
    weatherDayDispatch({
      type: 'UPDATE_DAY', 
      data: {
        day: day
      }
    });
  }, [day]);

  useEffect(() => {
    weatherDayDispatch({
      type: 'UPDATE_WEATHER', 
      data: {
        weather: currentWeather
      }
    });
  }, [currentWeather]);

  
  return (
    <DayInfoView complex={complex}/>
  )
}