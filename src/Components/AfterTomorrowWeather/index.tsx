import React from 'react'
import { celsiusToFahrenheit } from '../../Common-functions'
import { afterTomorrowBackgroundColor } from '../../Constants/weatherBackgroundColor'

interface Forecast {
  temperature: number
}

interface Props {
  afterTomorrowWeather: Forecast
  afterTomorrowTemperature: number
  isUserInputLocalityEmpty: boolean
  isCelsius: boolean
  toggleTemperature: Function
}

const defineAfterTomorrowBackgroundColor = (temperature: number) => {
  if (temperature < 15) {
    return afterTomorrowBackgroundColor.blue
  } else if (temperature > 35) {
    return afterTomorrowBackgroundColor.red
  } else {
    return afterTomorrowBackgroundColor.yellow
  }
}

export const AfterTomorrowWeather = ({ afterTomorrowWeather, afterTomorrowTemperature, isUserInputLocalityEmpty, isCelsius, toggleTemperature }: Props) => {
  const celsiusTemperature = afterTomorrowTemperature
  const fahrenheitTemperature = celsiusToFahrenheit(afterTomorrowTemperature)
  const backgroundColor = afterTomorrowWeather && defineAfterTomorrowBackgroundColor(afterTomorrowWeather?.temperature)
  const isAfterTomorrowWeather = afterTomorrowWeather !== undefined

  return (
    isAfterTomorrowWeather && !isUserInputLocalityEmpty
      ? (
      <section className={`${backgroundColor} h-1/5 opacity-80 pl-[50%] text-white`} onClick={() => toggleTemperature()}>
        <p className='pt-2'>Depois de amanhã</p>
        <p>{isCelsius ? `${celsiusTemperature}ºC` : `${fahrenheitTemperature}ºF`}</p>
      </section>
        )
      : (
        <>
          <section className='bg-gray-600 h-1/5 opacity-80' />
        </>
        )
  )
}
