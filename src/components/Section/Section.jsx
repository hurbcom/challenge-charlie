import React from 'react'
import PropTypes from 'prop-types'
import Weather from 'components/Weather/Weather'
import WeatherConditionIcon from 'components/WeatherConditionIcon/WeatherConditionIcon'
import styles from './Section.module.scss'

const Section = ({ day, weather, ...rest }) => (
  <section className={styles.section}>
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
  weather: PropTypes.object,
}

export default Section
