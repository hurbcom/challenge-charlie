class Utils {
  public static convertToFahrenheit = (celsius: number) => {
    const fahrenheit = (celsius * 9) / 5 + 32
    return fahrenheit
  }
  public static convertToCelsius = (fahrenheit: number) => {
    const celsius = ((fahrenheit - 32) * 5) / 9
    return celsius
  }
}

export default Utils
