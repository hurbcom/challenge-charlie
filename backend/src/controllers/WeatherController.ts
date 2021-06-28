import { NextFunction, Request, Response } from 'express'

import GetWeatherByLocationService from '@services/GetWeatherByLocationService'
import OpenWeatherAPI from '@libraries/OpenWeatherAPI'
import GetWeatherByLocationValidator from '@validators/GetWeatherByLocationValidator'
import OpenCageAPI from '@libraries/OpenCageAPI'
import HttpException from '@libraries/HttpException'

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

      // throw new HttpException(400, 'não pode')

      // return response.json({
      //   city: 'Sorocaba',
      //   state: 'São Paulo',
      //   latitude: -23.5007185,
      //   longitude: -47.4574439,
      //   weatherByDays: [
      //     {
      //       classification: 'Clear',
      //       temperatureInFahrenheit: 82.06,
      //       windSpeedInMetersBySecond: 11.97,
      //       windDirectionInAzimuthDegrees: 339,
      //       humidity: 37,
      //       pressure: 1016
      //     },
      //     {
      //       classification: 'Clouds',
      //       temperatureInFahrenheit: 74.43,
      //       windSpeedInMetersBySecond: 7.74,
      //       windDirectionInAzimuthDegrees: 140,
      //       humidity: 39,
      //       pressure: 1019
      //     },
      //     {
      //       classification: 'Rain',
      //       temperatureInFahrenheit: 62.64,
      //       windSpeedInMetersBySecond: 8.01,
      //       windDirectionInAzimuthDegrees: 179,
      //       humidity: 73,
      //       pressure: 1021
      //     }
      //   ]
      // })
    } catch (error) {
      next(error)
    }
  }
}

export default new WeatherController()
