export class Temperature {

  selectedTemperatureUnit: TemperatureUnit = TemperatureUnit.Celsius;

  constructor(public celsius?: number) { }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(fahrenheit: number) {
    this.celsius = (fahrenheit - 32) / 1.8;
  }

  get selectedUnitValue() {
    switch (this.selectedTemperatureUnit) {
      case TemperatureUnit.Celsius:
        return this.celsius;
      case TemperatureUnit.Fahrenheit:
        return this.fahrenheit;
    }
  }

  changeUnit() {
    switch (this.selectedTemperatureUnit) {
      case TemperatureUnit.Celsius:
        return this.selectedTemperatureUnit = TemperatureUnit.Fahrenheit;
      case TemperatureUnit.Fahrenheit:
      return this.selectedTemperatureUnit = TemperatureUnit.Celsius;
    }
  }

  toString() {
    return `${Math.round(this.selectedUnitValue)}${this.selectedTemperatureUnit}`;
  }
}

enum TemperatureUnit {
  Celsius = "ºC",
  Fahrenheit = "ºF"
}