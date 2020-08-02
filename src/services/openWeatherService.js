import { client } from 'utils/client'

const { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } = process.env

const hoursMinutesAndSecondsAtNoon = '12:00:00'
const dayDurationInMilliSeconds = 1000 * 60 * 60 * 24

const mapDifferenceBetweenDaysToPlainText = {
  1: 'Tomorrow',
  2: 'After tomorrow',
}

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

  this.getForecasts = function (limitOfDays) {
    return client(`${OPEN_WEATHER_API_URL}/forecast${queryString}`).then(({ list }) => {
      const currentDate = new Date()

      const filtered = list
        .filter(({ dt_txt }) => dt_txt.includes(hoursMinutesAndSecondsAtNoon))
        .map(({ dt_txt, main }) => {
          const forecastDate = new Date(dt_txt)
          const differenceBetweenDays = Math.round(
            (forecastDate - currentDate) / dayDurationInMilliSeconds,
          )

          return {
            day: mapDifferenceBetweenDaysToPlainText[differenceBetweenDays],
            temperature: main.temp,
          }
        })
        .slice(0, limitOfDays)

      return filtered
    })
  }
}
