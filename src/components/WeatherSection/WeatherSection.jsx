import React from 'react'
import Section from 'components/Section/Section'
import PropTypes from 'prop-types'
import useWeather from 'hooks/useWeather'

const WeatherSection = ({ city, ...rest }) => {
  const { weather } = useWeather({ city })

  return (
    <>
      <Section day='Hoje' weather={weather} {...rest} />
    </>
  )
}

WeatherSection.propTypes = {
  city: PropTypes.string,
}

export default WeatherSection
