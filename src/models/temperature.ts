import { TEMPERATURE_UNITS } from '@/common'
import {
  ITemperature,
  ITemperatureConstructor,
  TemperatureUnit,
} from '@/interfaces'

export class Temperature implements ITemperature {
  private CONVERSION_FACTOR = 1.8
  private OFFSET = 32

  private value: number
  private unit: TemperatureUnit

  constructor({ value, unit }: ITemperatureConstructor) {
    this.value = value === null ? 0 : value
    this.unit = unit
  }

  get celsiusValue(): number {
    if (this.unit === TEMPERATURE_UNITS.CELSIUS) return this.value
    const celsius = (this.value - this.OFFSET) / this.CONVERSION_FACTOR
    return parseFloat(celsius.toFixed(2))
  }

  get celsius(): string {
    return `${this.celsiusValue}°C`
  }

  get fahrenheitValue(): number {
    if (this.unit === TEMPERATURE_UNITS.FAHRENHEIT) return this.value
    const fahrenheit = this.value * this.CONVERSION_FACTOR + this.OFFSET
    return parseFloat(fahrenheit.toFixed(2))
  }

  get fahrenheit(): string {
    return `${this.fahrenheitValue}°F`
  }
}
