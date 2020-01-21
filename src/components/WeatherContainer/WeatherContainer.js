import React from 'react';
import styles from './WeatherContainer.module.css';
import SearchWeatherLocation from '../SearchWeatherLocation';
import DayInfo from '../DayInfo';
import { WeatherDayProvider } from '../../contexts/WeatherDayContext';


export default function WeatherContainer(){
  return (
    <div className={styles.container}>
      <SearchWeatherLocation/>

      <WeatherDayProvider>
        <DayInfo title='HOJE' day={0} complex={true}/>
      </WeatherDayProvider>

      <WeatherDayProvider>
        <DayInfo title='AMANHÃ' day={1}/>
      </WeatherDayProvider>

      <WeatherDayProvider>
        <DayInfo title='DEPOIS DE AMANHÃ' day={2}/>
      </WeatherDayProvider>
    </div>
  )
}