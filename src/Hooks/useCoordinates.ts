import { useEffect, useState } from 'react'

interface Coordinates {
  latitude: number
  longitude: number
}

export const useCoordinates = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords
      setCoordinates({ latitude, longitude })
    })
  }, [])

  return coordinates
}
