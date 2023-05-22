import { faker } from '@faker-js/faker'

export default () => ({
  openGateResponse: {
    results: [{
      components: {
        city: faker.address.city(),
        state_code: faker.address.stateAbbr(),
        country: faker.address.country(),
      },
      geometry: {
        lat: faker.datatype.number(),
        lng: faker.datatype.number(),
      },
    }],
  },

  create() {
    return this.openGateResponse
  },
})
