import { useEffect, useState } from 'react'
import { Coordinates } from '../Core/dtos/OpenWeatherResponseDTO'

export const useCoordinates = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords
      setCoordinates({ lat: latitude, lon: longitude })
    })
  }, [])

  return { coordinates }
}
