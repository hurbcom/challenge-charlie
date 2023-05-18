import { faker } from '@faker-js/faker'
import { DayTypes, Weather } from '../../features/weather/WeatherTypes'

faker.seed(123)

export default () => ({
  weather: {
    day: faker.helpers.arrayElement(Object.values(DayTypes)),
    description: faker.word.noun(),
    icon: faker.word.adverb(),
    temperature: faker.datatype.number(45),
    humidity: faker.datatype.number(15),
    pressure: faker.datatype.number(1500),
    windSpeed: faker.datatype.number(30),
    windDirection: faker.helpers.arrayElement(['NO', 'SE', 'N', 'S']),
    date: '',
  } as Weather,

  withDay(day: DayTypes) {
    this.weather.day = day
    return this
  },

  create(): Weather {
    return this.weather
  },
})
