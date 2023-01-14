import { ApiKey, Instance } from './api'
import { GetLocationByCoordinatesParams } from './interfaces/GetLocationByCoordinatesParams'

export const getLocationByCoordinates = async (params: GetLocationByCoordinatesParams) =>
  Instance.get(`json?q=${params.lat}+${params.long}&key=${ApiKey}`).then(res => res.data.results[0])
