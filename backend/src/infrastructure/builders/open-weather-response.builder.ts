import { faker } from '@faker-js/faker'

function createWeather() {
  return {
    dt: faker.datatype.number(),
    weather: [
      { main: faker.word.noun(), icon: faker.random.alphaNumeric(3) },
    ],
    main: {
      temp: faker.datatype.number(2),
      humidity: faker.datatype.number(),
      pressure: faker.datatype.number(),
    },
    wind: {
      speed: faker.datatype.number(),
      deg: faker.datatype.number(360),
    },
  }
}

export default () => ({
  weather: createWeather(),
  forecast: { list: Array(10).fill(null).map(() => (createWeather())) },

  createWeatherForecast() {
    return [this.weather, this.forecast]
  },
})
