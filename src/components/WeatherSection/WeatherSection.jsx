import React from 'react'
import Section from 'components/Section/Section'
import PropTypes from 'prop-types'
import useWeather from 'hooks/useWeather'
import { mapTemperatureToClassNames } from 'helpers'

const WeatherSection = ({ city, ...rest }) => {
  const { error, forecasts, weather } = useWeather({ city })

  const classNames = mapTemperatureToClassNames(weather?.temperature)

  return (
    <>
      <Section
        day='Today'
        error={error}
        temperatureBasedClassName={classNames[0]}
        weather={weather}
        {...rest}
      />

      {forecasts?.map((currentForecast, index) => (
        <Section
          day={currentForecast.day}
          key={`${currentForecast.temperature}-${index}`}
          temperatureBasedClassName={classNames[index + 1]}
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
