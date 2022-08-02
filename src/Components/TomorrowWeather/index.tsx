import React from 'react'
import { celsiusToFahrenheit } from '../../Common-functions'
import { tomorrowBackgroundColor } from '../../Constants/weatherBackgroundColor'

interface Forecast {
  temperature: number
}

interface Props {
  tomorrowWeather: Forecast;
  tomorrowTemperature: number;
  isUserInputLocalityEmpty: boolean
  isCelsius: boolean
  toggleTemperature: Function
}

const defineTomorrowBackgroundColor = (temperature: number) => {
  if (temperature < 15) {
    return tomorrowBackgroundColor.blue
  } else if (temperature > 35) {
    return tomorrowBackgroundColor.red
  } else {
    return tomorrowBackgroundColor.yellow
  }
}

export const TomorrowWeather = ({ tomorrowWeather, tomorrowTemperature, isUserInputLocalityEmpty, isCelsius, toggleTemperature }: Props) => {
  const celsiusTemperature = tomorrowTemperature
  const fahrenheitTemperature = celsiusToFahrenheit(tomorrowTemperature)
  const backgroundColor = tomorrowWeather && defineTomorrowBackgroundColor(tomorrowWeather?.temperature)
  const isTomorrowWeather = tomorrowWeather !== undefined

  return (
    isTomorrowWeather && !isUserInputLocalityEmpty
      ? (
      <section className={`${backgroundColor} h-1/5 opacity-80 pl-[50%] text-white`} onClick={() => toggleTemperature()}>
        <p className='pt-2'>Amanhã</p>
        <p>{isCelsius ? `${celsiusTemperature}ºC` : `${fahrenheitTemperature}ºF`}</p>
      </section>
        )
      : (
        <>
          <section className='bg-gray-500 h-1/5 opacity-80' />
        </>
        )
  )
}
