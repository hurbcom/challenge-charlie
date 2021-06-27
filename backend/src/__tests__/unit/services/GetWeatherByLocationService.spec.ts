import OpenCageAPI from '@libraries/OpenCageAPI'
import OpenWeatherAPI from '@libraries/OpenWeatherAPI'

import getWeatherByLocationResponse from '@mocks/OpenCageAPI.getWeatherByLocation.mock'
import getWeatherByCoordinates from '@mocks/OpenWeatherAPI.getWeatherByCoordinates.mock'

import GetWeatherByLocationService from '@services/GetWeatherByLocationService'

const OpenCageAPIMock = OpenCageAPI as jest.Mock<OpenCageAPI>
const OpenWeatherAPIMock = OpenWeatherAPI as jest.Mock<OpenWeatherAPI>

jest.mock('@libraries/OpenWeatherAPI', () =>
  jest.fn().mockImplementation(() => ({
    getWeatherByLocation: () => getWeatherByCoordinates
  }))
)

jest.mock('@libraries/OpenCageAPI', () =>
  jest.fn().mockImplementation(() => ({
    getWeatherByLocation: () => getWeatherByLocationResponse
  }))
)

it('should be instantiated correctly', async () => {
  const openWeatherAPI = new OpenWeatherAPIMock()
  const openCageAPI = new OpenCageAPIMock()

  const getWeatherLocationService = new GetWeatherByLocationService(
    openWeatherAPI,
    openCageAPI
  )

  expect(getWeatherLocationService).toBeInstanceOf(GetWeatherByLocationService)
})
