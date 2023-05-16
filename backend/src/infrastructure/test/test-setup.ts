import loadEnv from '../../startup/load-env'

const setup = async () => {
  await loadEnv()
}

beforeEach(async () => {
  jest.clearAllMocks()
})

beforeAll(async () => {
  await setup()
})
