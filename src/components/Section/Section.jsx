import React from 'react'
import PropTypes from 'prop-types'
import WeatherConditionIcon from 'components/WeatherConditionIcon/WeatherConditionIcon'
import styles from './Section.module.scss'

const Section = ({ weather, ...rest }) => (
  <section className={styles.section}>
    {weather ? (
      <>
        {weather.descriptionId && (
          <WeatherConditionIcon descriptionId={weather.descriptionId} {...rest} />
        )}
      </>
    ) : null}
  </section>
)

Section.propTypes = {
  day: PropTypes.string,
  weather: PropTypes.object,
}

export default Section
