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
}

export default OpenWeatherService
