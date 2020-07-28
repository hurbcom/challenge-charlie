import React from 'react'
import useGeolocation from 'hooks/useGeolocation'
import useGeolocationConverter from 'hooks/useGelocationConverter'

const App = () => {
  const locationCoordinates = useGeolocation()
  useGeolocationConverter(locationCoordinates)

  return <main>App</main>
}

export default App
