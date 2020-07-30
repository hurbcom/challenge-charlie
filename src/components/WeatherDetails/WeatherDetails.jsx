import React from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'
import { parseWindUnits, transformDegreesToText } from 'helpers'
import styles from './WeatherDetails.module.scss'

const WeatherDetails = ({ description, humidity, pressure, windDegrees, windSpeed }) => (
  <div className={styles.description}>
    <Title size='small'>{description}</Title>
    <Text size='small'>
      Vento: {transformDegreesToText(windDegrees)} {parseWindUnits(windSpeed)} km/h
    </Text>
    <Text size='small'>Humidade: {humidity} %</Text>
    <Text size='small'>Pressão: {pressure} hPA</Text>
  </div>
)

WeatherDetails.propTypes = {
  description: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  windDegrees: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
}

export default WeatherDetails
