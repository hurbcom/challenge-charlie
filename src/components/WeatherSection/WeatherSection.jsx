import React from 'react'
import PropTypes from 'prop-types'
import useWeather from 'hooks/useWeather'

const WeatherSection = ({ city }) => {
  useWeather({ city })

  return <>WeatherSection</>
}

WeatherSection.propTypes = {
  city: PropTypes.string,
}

export default WeatherSection
