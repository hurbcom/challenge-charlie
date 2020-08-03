import React from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'
import i18n from 'utils/i18n'
import useTemperatureFormatter from 'hooks/useTemperatureFormatter'
import styles from './MainWeather.module.scss'

const MainWeather = ({ day, temperature }) => {
  const { formattedTemperature, handleTemperatureUnitToggle } = useTemperatureFormatter(temperature)

  return (
    <div className={styles.wrapper} data-testid='main-weather-wrapper'>
      {day && <Title uppercase>{i18n(day)}</Title>}
      {temperature && <Text onClick={handleTemperatureUnitToggle}>{formattedTemperature}</Text>}
    </div>
  )
}

MainWeather.propTypes = {
  day: PropTypes.string,
  temperature: PropTypes.number,
}

export default MainWeather
