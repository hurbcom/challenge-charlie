import React from 'react'
import PropTypes from 'prop-types'
import MainWeather from 'components/MainWeather/MainWeather'
import WeatherDetails from 'components/WeatherDetails/WeatherDetails'
import styles from './Weather.module.scss'

const Weather = ({ day, weather }) => (
  <div className={styles.weather}>
    <MainWeather day={day} temperature={weather.temperature} />

    {weather.description && (
      <WeatherDetails
        description={weather.description}
        humidity={weather.humidity}
        pressure={weather.pressure}
        windSpeed={weather.wind.speed}
      />
    )}
  </div>
)

Weather.propTypes = {
  day: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
}

export default Weather
