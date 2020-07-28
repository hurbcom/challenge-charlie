import React from 'react'
import Layout from 'components/Layout/Layout'
import useGeolocation from 'hooks/useGeolocation'
import useGeolocationConverter from 'hooks/useGelocationConverter'

const App = () => {
  const locationCoordinates = useGeolocation()
  useGeolocationConverter(locationCoordinates)

  return (
    <Layout>
      <main>App</main>
    </Layout>
  )
}

export default App
