import { useEffect, useState } from 'react'
import i18n from 'utils/i18n'

const disabledMessage = 'You must enable geolocation in order to use this app'

function useGeolocation() {
  const [geolocationDisabledMessage, setDisabledMessage] = useState()
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLatitude(coords.latitude)
        setLongitude(coords.longitude)
      },
      () => setDisabledMessage(i18n(disabledMessage)),
    )
  }, [])

  return {
    geolocationDisabledMessage,
    latitude,
    longitude,
  }
}

export default useGeolocation
