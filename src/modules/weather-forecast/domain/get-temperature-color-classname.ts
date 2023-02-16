import { BASE_TEMPERATURES, TEMPERATURE_COLORS } from '@/common'

export function getCelsiusTemperatureColorClassName(
  temperature: number | null
) {
  if (temperature === null) return TEMPERATURE_COLORS.DEFAULT

  if (temperature < BASE_TEMPERATURES.C_COLD) return TEMPERATURE_COLORS.COLD

  if (
    temperature >= BASE_TEMPERATURES.C_COLD &&
    temperature < BASE_TEMPERATURES.C_HOT
  )
    return TEMPERATURE_COLORS.WARM

  return TEMPERATURE_COLORS.HOT
}

export function getFahrenheitTemperatureColorClassName(
  temperature: number | null
) {
  if (temperature === null) return TEMPERATURE_COLORS.DEFAULT

  if (temperature < BASE_TEMPERATURES.F_COLD) return TEMPERATURE_COLORS.COLD

  if (
    temperature >= BASE_TEMPERATURES.F_COLD &&
    temperature < BASE_TEMPERATURES.F_HOT
  )
    return TEMPERATURE_COLORS.WARM

  return TEMPERATURE_COLORS.HOT
}
