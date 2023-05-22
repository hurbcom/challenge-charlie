import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default () => {
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) toast.warn('Geolocalização não suportada.')

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },
        () => toast.warn('Não foi possível obter localização.'),
      )
    }

    getLocation()
  }, [])

  return [latitude, longitude]
}
