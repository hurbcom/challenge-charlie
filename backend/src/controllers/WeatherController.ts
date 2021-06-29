import { NextFunction, Request, Response } from 'express'

import GetWeatherByLocationValidator from '@validators/GetWeatherByLocationValidator'
import GetWeatherByLocationService from '@services/GetWeatherByLocationService'
import OpenWeatherAPI from '@libraries/OpenWeatherAPI'
import OpenCageAPI from '@libraries/OpenCageAPI'

import Redis from '@libraries/Redis'
import { getRedisKey } from '@utils/functions'

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

      const key = getRedisKey(request)

      Redis.saveInRedis(
        key,
        weatherData
      )

      return response.json(weatherData)
    } catch (error) {
      next(error)
    }
  }
}

export default new WeatherController()
