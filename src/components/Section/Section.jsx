import React from 'react'
import PropTypes from 'prop-types'
import Title from 'components/Title/Title'
import Weather from 'components/Weather/Weather'
import WeatherConditionIcon from 'components/WeatherConditionIcon/WeatherConditionIcon'
import Loading from 'icons/loading.svg'
import styles from './Section.module.scss'

const Section = ({ day = 'Today', error, temperatureBasedClassName, weather, ...rest }) => {
  const className = `${styles.section} ${styles[temperatureBasedClassName]} ${
    !weather ? styles['no-results'] : ''
  }`

  function renderWeatherContent() {
    if (!weather) {
      return <Loading />
    }

    return (
      <>
        <WeatherConditionIcon descriptionId={weather.descriptionId} {...rest} />
        <Weather day={day} weather={weather} />
      </>
    )
  }

  return (
    <section className={className}>
      {error ? <Title>{error}</Title> : renderWeatherContent()}
    </section>
  )
}

Section.propTypes = {
  day: PropTypes.string,
  error: PropTypes.string,
  temperatureBasedClassName: PropTypes.string.isRequired,
  weather: PropTypes.object,
}

export default Section
