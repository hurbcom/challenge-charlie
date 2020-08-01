import React from 'react'
import Header from 'components/Header/Header'
import Layout from 'components/Layout/Layout'
import WeatherSection from 'components/WeatherSection/WeatherSection'
import useBackgroundImage from 'hooks/useBackgroundImage'
import useGeolocation from 'hooks/useGeolocation'
import useGeolocationConverter from 'hooks/useGelocationConverter'

const App = () => {
  const { backgroundImage } = useBackgroundImage()
  const locationCoordinates = useGeolocation()
  const { city, setNewCity, sunRise, sunSet } = useGeolocationConverter(locationCoordinates)

  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <Layout>
        <Header city={city} onCityChanged={setNewCity} />

        <WeatherSection city={city} sunRise={sunRise} sunSet={sunSet} />
      </Layout>
    </main>
  )
}

export default App
