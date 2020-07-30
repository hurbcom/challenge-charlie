import React from 'react'
import PropTypes from 'prop-types'
import Weather from 'components/Weather/Weather'
import WeatherConditionIcon from 'components/WeatherConditionIcon/WeatherConditionIcon'
import styles from './Section.module.scss'

const Section = ({ day = 'Hoje', temperatureBasedClassName, weather, ...rest }) => (
  <section className={`${styles.section} ${styles[temperatureBasedClassName]}`}>
    {weather ? (
      <>
        <WeatherConditionIcon descriptionId={weather.descriptionId} {...rest} />
        <Weather day={day} weather={weather} />
      </>
    ) : null}
  </section>
)

Section.propTypes = {
  day: PropTypes.string,
  temperatureBasedClassName: PropTypes.string.isRequired,
  weather: PropTypes.object,
}

export default Section
