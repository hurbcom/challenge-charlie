const { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } = process.env

export function OpenWeatherService({ city }) {
  const language = navigator.language.replace(/-/g, '_')
  const queryString = `q=${city}&APPID=${OPEN_WEATHER_API_KEY}&lang=${language}&units=metric`

  this.getWeather = function () {
    return fetch(`${OPEN_WEATHER_API_URL}${queryString}`)
      .then(r => r.json())
      .then(data => {
        const [weather] = data.weather

        return {
          description: weather.description,
          descriptionId: weather.id,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          temperature: data.main.temp,
          wind: {
            degrees: data.wind.deg,
            speed: data.wind.speed,
          },
        }
      })
  }
}
