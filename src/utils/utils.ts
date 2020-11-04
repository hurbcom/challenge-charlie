class Utils {
  public static convertToFahrenheit = (celsius: number) => {
    const fahrenheit = (celsius * 9) / 5 + 32
    return fahrenheit
  }
  public static convertToCelsius = (fahrenheit: number) => {
    const celsius = ((fahrenheit - 32) * 5) / 9
    return celsius
  }
  public static capitalize = (str: string) =>
    str
      .toLowerCase()
      .replace(/(?:^|\s|["'([{])+\S/g, (match: string) => match.toUpperCase())
  public static getWindDeg = (value: number) => {
    if (value <= 11.25) return 'N'
    const newValue = value - 11.25
    const allDirections = [
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
      'N'
    ]
    const dIndex = Math.floor(newValue / 22.5)
    return allDirections[dIndex] ? allDirections[dIndex] : 'N'
  }
}

export default Utils
