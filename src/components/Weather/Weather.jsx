import React from 'react'
import PropTypes from 'prop-types'
import MainWeather from 'components/MainWeather/MainWeather'
import styles from './Weather.module.scss'

const Weather = ({ day, weather }) => (
  <div className={styles.weather}>
    <MainWeather day={day} temperature={Math.round(weather.temperature)} />
  </div>
)

Weather.propTypes = {
  day: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
}

export default Weather
