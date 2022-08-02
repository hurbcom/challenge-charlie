import React from 'react'
import { celsiusToFahrenheit } from '../../Common-functions'
import { todayBackgroundColor } from '../../Constants/weatherBackgroundColor'
import { WeatherIcon } from '../WeatherIcon'

interface Weather {
  temperature: number
  description: string
  windSpeed: number
  humidity: number
  pressure: number
  main: string
  windPosition: string
}

interface Props {
  todayWeather: Weather
  isUserInputLocalityEmpty: boolean
  isCelsius: boolean
  toggleTemperature: Function
  todayTemperature: number
}

const defineTodayBackgroundColor = (temperature: number) => {
  if (temperature < 15) {
    return todayBackgroundColor.blue
  } else if (temperature > 35) {
    return todayBackgroundColor.red
  } else {
    return todayBackgroundColor.yellow
  }
}

export const TodayWeather = ({ todayWeather, todayTemperature, isUserInputLocalityEmpty, isCelsius, toggleTemperature }: Props) => {
  const celsiusTemperature = todayTemperature
  const fahrenheitTemperature = celsiusToFahrenheit(todayTemperature)
  const backgroundColor = todayWeather && defineTodayBackgroundColor(todayWeather?.temperature)
  const isTodayWeather = todayWeather !== undefined
  return (
    isTodayWeather && !isUserInputLocalityEmpty
      ? (
      <section className={`${backgroundColor} opacity-80 h-2/5 flex text-white text-[18px]`} onClick={() => toggleTemperature()}>
        <div className='h-full w-2/4 flex justify-center items-center'>
          {WeatherIcon(todayWeather?.main)}
        </div>
        <div>
          <div>
            <p className='pt-2'>Hoje</p>
            <p className='pt-2'>{isCelsius ? `${celsiusTemperature}ºC` : `${fahrenheitTemperature}ºF`}</p>
          </div>
          <p className='pt-3'>{todayWeather?.description}</p>
          <div className='pt-2'>
            <p>Vento: {todayWeather?.windPosition} {todayWeather?.windSpeed}km/h</p>
            <p className='pt-0.5'>Humidade: {todayWeather?.humidity}%</p>
            <p className='pt-0.5'>Pressão: {todayWeather?.pressure}hPA</p>
          </div>
        </div>
      </section>
        )
      : (
          <section className='bg-gray-400 opacity-80 h-2/5 flex text-white text-[18px]' />
        )
  )
}
