import { NextFunction, Request, Response } from 'express'

import GetWeatherByLocationService from '@services/GetWeatherByLocationService'
import OpenWeatherAPI from '@libraries/OpenWeatherAPI'
import GetWeatherByLocationValidator from '@validators/GetWeatherByLocationValidator'
import OpenCageAPI from '@libraries/OpenCageAPI'

class WeatherController {
  public async getWeatherByLocation (request: Request, response: Response, next: NextFunction) {
    try {
      const queryString = new GetWeatherByLocationValidator(request.query)
      await queryString.validate()
      const expectedParams = queryString.getExpectedParams()

      const openWeatherAPI = new OpenWeatherAPI()
      const openCageAPI = new OpenCageAPI()

      const getWeatherLocationService = new GetWeatherByLocationService(
        openWeatherAPI,
        openCageAPI
      )

      const weatherData = await getWeatherLocationService.execute(expectedParams)

      return response.json(weatherData)
    } catch (error) {
      next(error)
    }
  }
}

export default new WeatherController()
