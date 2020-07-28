import { useEffect, useState } from 'react'

function useGeolocation() {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({ coords }) => {
      setLatitude(coords.latitude)
      setLongitude(coords.longitude)
    })
  }, [])

  return {
    latitude,
    longitude,
  }
}

export default useGeolocation
