import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'

const conversionFactor = 9 / 5
const offset = 32

const MainWeather = ({ day, temperature }) => {
  const [temperatureUnit, setTemperatureUnit] = useState('c')

  const computedTemperatureValue =
    temperatureUnit === 'f' ? conversionFactor * temperature + offset : temperature

  const formattedTemperature = `${computedTemperatureValue} º${temperatureUnit.toUpperCase()}`

  return (
    <>
      <Title uppercase>{day}</Title>
      <Text onClick={() => setTemperatureUnit(temperatureUnit === 'c' ? 'f' : 'c')}>
        {formattedTemperature}
      </Text>
    </>
  )
}

MainWeather.propTypes = {
  day: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
}

export default MainWeather
