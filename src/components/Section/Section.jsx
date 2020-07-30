import React from 'react'
import PropTypes from 'prop-types'
import Weather from 'components/Weather/Weather'
import WeatherConditionIcon from 'components/WeatherConditionIcon/WeatherConditionIcon'
import Loading from 'icons/loading.svg'
import styles from './Section.module.scss'

const Section = ({ day = 'Hoje', temperatureBasedClassName, weather, ...rest }) => {
  const className = `${styles.section} ${styles[temperatureBasedClassName]} ${
    !weather ? styles['no-results'] : ''
  }`

  return (
    <section className={className}>
      {weather ? (
        <>
          <WeatherConditionIcon descriptionId={weather.descriptionId} {...rest} />
          <Weather day={day} weather={weather} />
        </>
      ) : (
        <Loading />
      )}
    </section>
  )
}

Section.propTypes = {
  day: PropTypes.string,
  temperatureBasedClassName: PropTypes.string.isRequired,
  weather: PropTypes.object,
}

export default Section
