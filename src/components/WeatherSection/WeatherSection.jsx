import React from 'react'
import Section from 'components/Section/Section'
import PropTypes from 'prop-types'
import useWeather from 'hooks/useWeather'

const WeatherSection = ({ city, ...rest }) => {
  const { forecasts, weather } = useWeather({ city })

  return (
    <>
      <Section day='Hoje' weather={weather} {...rest} />

      {forecasts?.map((currentForecast, index) => (
        <Section
          day={currentForecast.day}
          key={`${currentForecast.temperature}-${index}`}
          weather={currentForecast}
          {...rest}
        />
      ))}
    </>
  )
}

WeatherSection.propTypes = {
  city: PropTypes.string,
}

export default WeatherSection
