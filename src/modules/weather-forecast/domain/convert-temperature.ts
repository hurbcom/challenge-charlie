const CONVERSION_FACTOR = 1.8
const OFFSET = 32

export function celsiusToFahrenheit(celsius: number): number {
  const fahrenheit = celsius * CONVERSION_FACTOR + OFFSET

  return parseFloat(fahrenheit.toFixed(2))
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  const celsius = (fahrenheit - OFFSET) / CONVERSION_FACTOR

  return parseFloat(celsius.toFixed(2))
}
