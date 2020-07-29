import { client } from 'utils/client'

const { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } = process.env

export function OpenWeatherService({ city }) {
  const language = navigator.language.replace(/-/g, '_')
  const queryString = `?q=${city}&APPID=${OPEN_WEATHER_API_KEY}&lang=${language}&units=metric`

  this.getWeather = function () {
    return client(`${OPEN_WEATHER_API_URL}/weather${queryString}`).then(data => {
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

  this.getForecasts = function (limitOfDays = 2) {
    return client(`${OPEN_WEATHER_API_URL}/forecast${queryString}`).then(({ list }) => {
      const currentDate = new Date().getDate()

      const filtered = list
        .filter(({ dt_txt }) => dt_txt.includes('00:00:00')) // get avg_temp from every included hour
        .map(({ dt_txt, main }) => {
          const forecastDate = new Date(dt_txt).getDate()
          const mapDifferenceToPlainText = {
            1: 'Amanhã',
            2: 'Depois de amanhã',
          }

          return {
            day: mapDifferenceToPlainText[forecastDate - currentDate],
            temperature: main.temp,
          }
        })
        .slice(0, limitOfDays)

      return filtered
    })
  }
}
