import { ApiKey, Instance } from './api'
import { WeatherForecastUnitsEnum } from './enums/WeatherForecastUnitsEnum'
import { GetWeatherForecastParams } from './interfaces/GetWeatherForecastParams'

export const getWeatherForecast = async (params: GetWeatherForecastParams) =>
  Instance.get('', {
    params: {
      appid: ApiKey,
      q: params.address,
      lang: 'pt_br',
      units: params.units || WeatherForecastUnitsEnum.METRIC
    }
  }).then(res => res.data)
