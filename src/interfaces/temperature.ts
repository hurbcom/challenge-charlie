export type TemperatureUnit = '°C' | '°F'

export type ITemperatureConstructor = {
  value: number | null
  unit: TemperatureUnit
}

export interface ITemperature {
  get celsius(): string
  get fahrenheit(): string
}
