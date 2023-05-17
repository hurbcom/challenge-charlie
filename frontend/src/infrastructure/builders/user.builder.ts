import { faker } from '@faker-js/faker'
import { User } from '../../features/node-sample/NodeSampleTypes'

faker.seed(123)

export default () => ({
  user: {
    id: faker.datatype.number(99),
    name: faker.name.firstName(),
    age: faker.datatype.number(55),
  } as User,

  withName(name: string) {
    this.user.name = name
    return this
  },

  withAge(age: number) {
    this.user.age = age
    return this
  },

  create(): User {
    return this.user
  },
})
