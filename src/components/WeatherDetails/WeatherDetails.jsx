import React from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'
import { parseWindUnits, transformDegreesToText } from 'helpers'
import i18n from 'utils/i18n'
import styles from './WeatherDetails.module.scss'

const WeatherDetails = ({ description, humidity, pressure, windDegrees, windSpeed }) => {
  const windText = `${i18n('Wind')}: ${transformDegreesToText(windDegrees)} ${parseWindUnits(
    windSpeed,
  )} km/h`
  const humidityText = `${i18n('Humidity')}: ${humidity} %`
  const pressureText = `${i18n('Pressure')}: ${pressure} hPA`

  return (
    <div className={styles.description}>
      <Title size='small'>{description}</Title>
      <Text size='small'>{windText}</Text>
      <Text size='small'>{humidityText}</Text>
      <Text size='small'>{pressureText}</Text>
    </div>
  )
}

WeatherDetails.propTypes = {
  description: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  windDegrees: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
}

export default WeatherDetails
