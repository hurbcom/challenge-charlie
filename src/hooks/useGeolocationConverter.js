import { useEffect, useState } from 'react'

import { OpenCagedService } from 'services/openCagedService'

function useGeolocationConverter({ latitude, longitude }) {
  const [locale, setLocale] = useState()
  const [newCity, setNewCity] = useState('')

  useEffect(() => {
    if (latitude && longitude) {
      new OpenCagedService({
        latitude,
        longitude,
      })
        .getLocale()
        .then(setLocale)
    }
  }, [latitude, longitude])

  return {
    city: newCity || locale?.city,
    setLocale,
    setNewCity,
    sunRise: locale?.sunRise,
    sunSet: locale?.sunSet,
  }
}

export default useGeolocationConverter
