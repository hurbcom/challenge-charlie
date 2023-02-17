/* eslint-disable react-hooks/exhaustive-deps */
import { DAY_DESCRIPTIONS, TEMPERATURE_UNITS_NAMES } from '@/common'
import { IForecast, ITemperature } from '@/interfaces'
import { useCallback, useMemo, useState } from 'react'
import { Domain } from '@/modules/weather-forecast/domain/forecast-domain'
import { IForecastViewModel } from '@/modules/weather-forecast/interfaces'

interface Params {
  domain: Domain
}

export const useForecastViewModel = ({
  domain,
}: Params): IForecastViewModel => {
  const [unit, setUnit] = useState(TEMPERATURE_UNITS_NAMES.CELSIUS)
  const [forecast, setForecast] = useState<IForecast | null>(null)

  const getForecast = async (query: string) => {
    const _forecast = await domain.getForecast(query)

    setForecast(_forecast)
  }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [unit]
  )

  const dayClassName = (day: string, temperature?: ITemperature) => {
    const value =
      Number(temperature?.[`${unit}Value` as keyof typeof temperature]) ?? null
    return getClassName(value, day)
  }

  const todayClassName = useMemo(
    () => dayClassName(DAY_DESCRIPTIONS.TODAY, forecast?.today.temperature),
    [forecast?.today.temperature, unit]
  )

  const tomorrowClassName = useMemo(
    () =>
      dayClassName(DAY_DESCRIPTIONS.TOMORROW, forecast?.tomorrow.temperature),
    [forecast?.today.temperature, unit]
  )

  const dayAfterTomorrowClassName = useMemo(
    () =>
      dayClassName(
        DAY_DESCRIPTIONS.DAY_AFTER_TOMORROW,
        forecast?.dayAfterTomorrow.temperature
      ),
    [forecast?.today.temperature, unit]
  )

  return {
    forecast,
    unit,
    getForecast,
    toggleUnit,
    className: {
      today: todayClassName,
      tomorrow: tomorrowClassName,
      dayAfterTomorrow: dayAfterTomorrowClassName,
    },
  }
}
