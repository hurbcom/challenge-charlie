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
  public static getBackgroundColorMatchWithWeather = (temp: number) => {
    if (temp <= 15) return 'linear-gradient(0deg, #0093E9 0%, #80D0C7 100%)'
    if (temp >= 25)
      return 'linear-gradient(0deg, hsl(344, 100%, 50%), hsl(31, 100%, 40%))'
    return 'linear-gradient(0deg, #cac531, #f3f9a7)'
  }
  public static getBackgroundHoverColorMatchWithWeather = (temp: number) => {
    if (temp <= 15)
      return 'radial-gradient( circle farthest-corner at 21.3% 26.5%,  rgba(47,181,227,1) 0%, rgba(155,208,237,1) 61.4% )'
    if (temp >= 25)
      return 'radial-gradient( circle farthest-corner at 50.4% 50.5%,  rgba(251,32,86,1) 0%, rgba(135,2,35,1) 90% )'
    return 'radial-gradient( circle 426px at 77.9% 31.3%,  rgba(255,229,131,1) 0%, rgb(249, 222, 0) 90% )'
  }
  public static getTextColorMatchWithWeather = (temp: number) => {
    if (temp <= 15) return '#424242'
    if (temp >= 25) return '#fff'
    return '#000'
  }
  public static getIconMatchWithWeather = (status: string) => {
    const allConditions: { [key: string]: string } = {
      Thunderstorm: '7',
      Drizzle: '7',
      Rain: '8',
      Snow: '#',
      Smoke: 'M',
      Haze: 'M',
      Dust: 'F',
      Fog: 'E',
      Sand: 'F',
      Ash: 'F',
      Squall: '!',
      Tornado: 'F',
      Clear: 'B',
      Clouds: 'Y'
    }

    return allConditions[status]
  }
}

export default Utils
