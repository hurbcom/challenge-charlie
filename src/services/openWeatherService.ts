class OpenWeatherService {
  public static getWeatherWithCityName = async (
    cityName: string,
    language = 'pt_br'
  ) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7ba73e0eb8efe773ed08bfd0627f07b8&units=metric&lang=${language}`
      )
      const results = await response.json()
      return results
    } catch (err) {
      console.error(err)
    }
  }
  public static getWeatherDaily = async (
    lat: number,
    long: number,
    language = 'pt_br'
  ) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=7ba73e0eb8efe773ed08bfd0627f07b8&units=metric&lang=${language}`
      )
      const results = await response.json()
      const { current, daily } = results
      return {
        today: current,
        tomorrow: daily[1],
        afterTomorrow: daily[2]
      }
    } catch (err) {
      console.error(err)
    }
  }
}

export default OpenWeatherService
