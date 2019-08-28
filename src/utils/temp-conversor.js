export function toCelsius (temp) {
  return (temp - 273.15).toFixed(2)
}

export function toFahrenheit (temp) {
  return (((temp - 273.15) * 1.8) + 32).toFixed(2)
}