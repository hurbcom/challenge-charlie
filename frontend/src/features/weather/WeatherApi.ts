import fetch, { Response } from '../../fetch'
import { Location, Weather } from './WeatherTypes'

const url = `${import.meta.env.VITE_BACKEND_API}/v1`

export default {
  getBingImageOfTheDay: (): any => fetch.getImage<Buffer>(`${url}/bing`),

  getLocationByLatAndLng: (
    latitude: number,
    longitude: number,
  ): Promise<Response<Location>> => fetch.get<Location>(
    `${url}/weather/location-by-lat-lng`,
    { latitude, longitude },
  ),

  getForecastByCity: (city: string): any => fetch.get<Weather[]>(`${url}/weather/forecast`, { city }),
}
