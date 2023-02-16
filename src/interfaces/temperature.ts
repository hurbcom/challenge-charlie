type TemperatureUnit = 'C' | 'F'

export interface ITemperature {
  value: number | null
  unit: TemperatureUnit
}
