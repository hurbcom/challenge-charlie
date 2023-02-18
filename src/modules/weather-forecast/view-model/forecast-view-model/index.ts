/* eslint-disable react-hooks/exhaustive-deps */
import { DAY_DESCRIPTIONS, TEMPERATURE_UNITS_NAMES } from '@/common'
import { ITemperature } from '@/interfaces'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ForecastDomain } from '@/modules/weather-forecast/domain/forecast-domain'
import {
  IForecastViewModel,
  State,
} from '@/modules/weather-forecast/interfaces'
import { loadingState } from '../../state'

interface Params {
  domain: ForecastDomain
}

export const useForecastViewModel = ({
  domain,
}: Params): IForecastViewModel => {
  const [unit, setUnit] = useState(TEMPERATURE_UNITS_NAMES.CELSIUS)
  const [state, setState] = useState<State | null>(null)

  const searchForecast = async (query: string) => {
    loadingState.setLoading(true)
    const forecast = await domain.getForecastByQuery(query)

    setState(forecast)
    loadingState.setLoading(false)
  }

  const getForecastByGeolocation = async () => {
    loadingState.setLoading(true)
    const location = await domain.getUserCurrentLocation()

    if (!location) return

    const { latitude, longitude } = location
    const forecast = await domain.getForecastByGeolocation(latitude, longitude)

    setState(forecast)
    loadingState.setLoading(false)
  }

  useEffect(() => {
    getForecastByGeolocation()
  }, [])

  const toggleUnit = () => {
    const nextUnit =
      unit === TEMPERATURE_UNITS_NAMES.CELSIUS
        ? TEMPERATURE_UNITS_NAMES.FAHRENHEIT
        : TEMPERATURE_UNITS_NAMES.CELSIUS

    setUnit(nextUnit)
  }

  const getClassName = useCallback(
    (temperature: number | null, day: string) => {
      return domain.getClassName(day, temperature, unit)
    },
    [unit]
  )

  const dayClassName = (day: string, temperature?: ITemperature) => {
    const value =
      Number(temperature?.[`${unit}Value` as keyof typeof temperature]) ?? null
    return getClassName(value, day)
  }

  const todayClassName = useMemo(
    () => dayClassName(DAY_DESCRIPTIONS.TODAY, state?.today.temperature),
    [state?.today.temperature, unit]
  )

  const tomorrowClassName = useMemo(
    () => dayClassName(DAY_DESCRIPTIONS.TOMORROW, state?.tomorrow.temperature),
    [state?.today.temperature, unit]
  )

  const dayAfterTomorrowClassName = useMemo(
    () =>
      dayClassName(
        DAY_DESCRIPTIONS.DAY_AFTER_TOMORROW,
        state?.dayAfterTomorrow.temperature
      ),
    [state?.today.temperature, unit]
  )

  return {
    state,
    unit,
    searchForecast,
    toggleUnit,
    className: {
      today: todayClassName,
      tomorrow: tomorrowClassName,
      dayAfterTomorrow: dayAfterTomorrowClassName,
    },
  }
}
