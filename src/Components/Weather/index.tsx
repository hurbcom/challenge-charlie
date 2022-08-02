import React, { useEffect, useState } from 'react'
import { Input } from '../Input'
import { useWeather } from '../../Hooks/useWeather'
import { TodayWeather } from '../TodayWeather'
import { TomorrowWeather } from '../TomorrowWeather'
import { AfterTomorrowWeather } from '../AfterTomorrowWeather'
import { useOpenCage } from '../../Hooks/useOpenCage'
import { celsiusToFahrenheit } from '../../Common-functions'

export const Weather = () => {
  const { locality } = useOpenCage()
  const { city = '', state = '' } = locality
  const userLocalityName = city ? `${city}, ${state}` : ''
  const [userInputLocality, setUserInputLocality] = useState('')
  const [isCelsius, setIsCelsius] = useState(true)

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius)
  }

  const isUserInputLocalityEmpty = userInputLocality.length === 0

  const { forecastWeather } = useWeather(userInputLocality)
  const { todayWeather, tomorrowWeather, afterTomorrowWeather } = forecastWeather

  const [temperatures, setTemperatures] = useState<any>({})

  useEffect(() => {
    setUserInputLocality(userLocalityName)
  }, [locality])

  useEffect(() => {
    setTemperatures({
      today: isCelsius ? todayWeather?.temperature : celsiusToFahrenheit(todayWeather?.temperature),
      tomorrow: isCelsius ? tomorrowWeather?.temperature : celsiusToFahrenheit(tomorrowWeather?.temperature),
      afterTomorrow: isCelsius ? afterTomorrowWeather?.temperature : celsiusToFahrenheit(afterTomorrowWeather?.temperature)
    })
  }, [forecastWeather, isCelsius])

  return (
    <div className="h-1/2 w-[530px] border border-amber-800">
      <Input setUserInputLocality={setUserInputLocality} userLocalityName={userLocalityName} />
      <TodayWeather
        todayTemperature={temperatures?.today}
        todayWeather={todayWeather}
        isUserInputLocalityEmpty={isUserInputLocalityEmpty}
        isCelsius={isCelsius}
        toggleTemperature={toggleTemperature}
      />
      <TomorrowWeather
        tomorrowTemperature={temperatures?.tomorrow}
        tomorrowWeather={tomorrowWeather}
        isUserInputLocalityEmpty={isUserInputLocalityEmpty}
        isCelsius={isCelsius}
        toggleTemperature={toggleTemperature}
      />
      <AfterTomorrowWeather
        afterTomorrowTemperature={temperatures?.afterTomorrow}
        afterTomorrowWeather={afterTomorrowWeather}
        isUserInputLocalityEmpty={isUserInputLocalityEmpty}
        isCelsius={isCelsius}
        toggleTemperature={toggleTemperature}
      />
    </div>
  )
}
