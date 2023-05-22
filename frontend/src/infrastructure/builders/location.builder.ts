import { faker } from '@faker-js/faker'
import { Location } from '../../features/weather/WeatherTypes'

faker.seed(123)

export default () => ({
  location: {
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    country: faker.address.country(),
    longitude: 1,
    latitude: 1,
  } as Location,

  create(): Location {
    return this.location
  },
})
