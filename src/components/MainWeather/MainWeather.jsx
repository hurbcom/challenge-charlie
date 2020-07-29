import React from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'
import useTemperatureFormatter from 'hooks/useTemperatureFormatter'

const MainWeather = ({ day, temperature }) => {
  const { formattedTemperature, handleTemperatureUnitToggle } = useTemperatureFormatter(temperature)

  return (
    <>
      <Title uppercase>{day}</Title>
      <Text onClick={handleTemperatureUnitToggle}>{formattedTemperature}</Text>
    </>
  )
}

MainWeather.propTypes = {
  day: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
}

export default MainWeather
