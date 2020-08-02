import React from 'react'
import Header from 'components/Header/Header'
import Layout from 'components/Layout/Layout'
import WeatherSection from 'components/WeatherSection/WeatherSection'
import useBackgroundImage from 'hooks/useBackgroundImage'
import useGeolocation from 'hooks/useGeolocation'
import useGeolocationConverter from 'hooks/useGeolocationConverter'

const App = () => {
  const { backgroundImage } = useBackgroundImage()
  const locationCoordinates = useGeolocation()
  const { city, setNewCity, sunRise, sunSet } = useGeolocationConverter(locationCoordinates)

  const { geolocationDisabledMessage } = locationCoordinates

  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <Layout>
        <Header city={city} disabled={!!geolocationDisabledMessage} onCityChanged={setNewCity} />

        <WeatherSection
          city={city}
          geolocationDisabledMessage={geolocationDisabledMessage}
          sunRise={sunRise}
          sunSet={sunSet}
        />
      </Layout>
    </main>
  )
}

export default App
