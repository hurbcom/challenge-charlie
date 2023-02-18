import { TemperatureUnit } from '@/interfaces'

export const BASE_TEMPERATURES = {
  C_COLD: 15, // graus celsius
  C_HOT: 35, // graus celsius
  F_COLD: 59, // graus farhenheit
  F_HOT: 95, // graus farhenheit
}

export const TEMPERATURE_COLORS = {
  DEFAULT: 'grey',
  COLD: 'blue',
  WARM: 'yellow',
  HOT: 'red',
}

export const TEMPERATURE_UNITS: Record<string, TemperatureUnit> = {
  CELSIUS: '°C',
  FAHRENHEIT: '°F',
}

export const TEMPERATURE_UNITS_NAMES = {
  CELSIUS: 'celsius',
  FAHRENHEIT: 'fahrenheit',
}
