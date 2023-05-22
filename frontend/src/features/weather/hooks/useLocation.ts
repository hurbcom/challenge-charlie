import { useEffect, useState } from 'react'
import WeatherApi from '../WeatherApi'
import { Location, Tuple } from '../WeatherTypes'

export default (latitude: number, longitude: number) => {
  const [location, setLocation] = useState<Location | undefined>(undefined)

  useEffect(() => {
    if (!latitude && !longitude) return
    const fetchLocation = async () => {
      const response = await WeatherApi.getLocationByLatAndLng(latitude, longitude)
      setLocation(response.data)
    }

    fetchLocation()
  }, [latitude, longitude])

  const clear = () => setLocation(undefined)

  return [location, clear] as Tuple<Location>
}
