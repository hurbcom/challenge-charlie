import React from 'react'
import Header from 'components/Header/Header'
import Layout from 'components/Layout/Layout'
import useGeolocation from 'hooks/useGeolocation'
import useGeolocationConverter from 'hooks/useGelocationConverter'

const App = () => {
  const locationCoordinates = useGeolocation()
  const { city, state } = useGeolocationConverter(locationCoordinates)

  return (
    <main>
      <Layout>
        <Header city={city} state={state} />
      </Layout>
    </main>
  )
}

export default App
