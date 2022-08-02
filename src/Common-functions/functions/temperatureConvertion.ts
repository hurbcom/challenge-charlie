const FREEZING_FAHRENHEIT_TEMPERATURE = 32
const CELSIUS_ABSOLUTE_ZERO_COMPARED_TO_KELVIN = 273.15
const SIMPLIFIED_FAHRENHEIT_BOILING_TEMPERATURE = 9
const SIMPLIFIED_CELSIUS_BOILING_TEMPERATURE = 5

export const fahrenheitToCelsius = (fahrenheitTemperature: number) => {
  return (fahrenheitTemperature - FREEZING_FAHRENHEIT_TEMPERATURE) * SIMPLIFIED_CELSIUS_BOILING_TEMPERATURE / SIMPLIFIED_FAHRENHEIT_BOILING_TEMPERATURE
}

export const celsiusToFahrenheit = (celsiusTemperature: number) => {
  return +Number((celsiusTemperature / SIMPLIFIED_CELSIUS_BOILING_TEMPERATURE) * SIMPLIFIED_FAHRENHEIT_BOILING_TEMPERATURE + FREEZING_FAHRENHEIT_TEMPERATURE).toFixed(0)
}

export const kelvinToCelsius = (kelvinTemperature: number) => {
  return +Number(kelvinTemperature - CELSIUS_ABSOLUTE_ZERO_COMPARED_TO_KELVIN).toFixed(2)
}
