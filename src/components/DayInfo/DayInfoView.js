
import React from 'react';
import weatherUtils from '../../utils/weather';
import styles from './DayInfoView.module.css';
import { useWeatherDayState } from '../../contexts/WeatherDayContext';
import { useWeatherState, useWeatherDispatch } from '../../contexts/WeatherContext';

const WeatherIcon = () => {
  const {weather} = useWeatherDayState();
  if(!weather) return '';
  return (
    <img alt='' className={styles.icon} src={weatherUtils.getWeatherIcon(weather)}/>
  )
}

/**
 * Mostra o titulo e a temperatura
 */
const DayBasicInfo = () => {
  const {title, tempF, tempC} = useWeatherDayState();
  const {currentDegreeMetric} = useWeatherState();
  const weatherDispatch = useWeatherDispatch();
  const toggleDegreeMetric = () => {
    weatherDispatch({type:'TOGGLE_DEGREE_METRIC'})
  }
  return (
    <div className={styles.basicInfo}>
      <p>{title}</p>
      <p>
        {currentDegreeMetric === 'celsius' &&
          <span className={styles.temperature} onClick={() => toggleDegreeMetric()}>{tempC === undefined ? '--' : tempC.toFixed(0)} ºC</span>
        }
        {currentDegreeMetric !== 'celsius' &&
          <span className={styles.temperature} onClick={() => toggleDegreeMetric()}>{tempF === undefined ? '--' : tempF.toFixed(0)} ºF</span>
        }
      </p>
    </div>
  )
}

/**
 * Mostra as informacoes a mais sobre a precisao como (vento, humidade etc)
 */
const DayComplexInfo = () => {
  const {weather, windDeg, humidity, pressure, windSpeed} = useWeatherDayState();
  return (
    <div className={styles.complexInfo}>
      <h1>{weather === undefined ? '--' : weatherUtils.getWeatherLabel(weather)}</h1>
      <p>Vento: {windDeg === undefined ? '--' : weatherUtils.getWindDegreesText(windDeg)} {windSpeed === undefined ? '--' : windSpeed.toFixed(1)}km/h</p>
      <p>Humidade: {humidity === undefined ? '--' : humidity.toFixed(0)}%</p>
      <p>Pressão: {pressure === undefined ? '--' : pressure.toFixed(0)}hPA</p>
    </div>
  )
}

const DayInfoComplexView = () => {
  const {backgroundColor} = useWeatherDayState();
  return (
    <div style={{backgroundColor}}>
      <div className={styles.container}>
        <div className={styles.iconBox}>
          <WeatherIcon></WeatherIcon>
        </div>
        <div className={styles.infoBox}>
          <DayBasicInfo></DayBasicInfo>
          <DayComplexInfo></DayComplexInfo>
        </div>
      </div>
    </div>
  )
}

const DayInfoBasicView = () => {
  const {backgroundColor} = useWeatherDayState();
  return (
    <div style={{backgroundColor}}>
      <div className={styles.container}>
        <div className={styles.iconBox}>
        </div>
        <div className={styles.infoBox}>
          <DayBasicInfo></DayBasicInfo>
        </div>
      </div>
    </div>
  )
}

const DayInfoView = ({complex}) => {
  if(complex) return <DayInfoComplexView/>;
  return (<DayInfoBasicView/>);
}

export { DayInfoBasicView, DayInfoComplexView };
export default DayInfoView;