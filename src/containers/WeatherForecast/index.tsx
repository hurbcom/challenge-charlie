import React from 'react'
import { Main, WeatherForecast as WeatherForecastUI } from '../../components'
import { useLocation } from '../../hooks'
import { Weather } from '../../services'
import { currentAndForecastWeatherProps } from '../../types/weather'
import { mapCurrentAndForeacastWeatherDataToProp } from '../../helpers/weather'

export type positionProps = {
  latitude: number
  longitude: number
}

const WeatherForecast = () => {
  const [location, setLocation] = useLocation()
  const [measurementUnit, setMeasurmentUnit] = React.useState('celsius')
  const [weather, setWeather] =
    React.useState<currentAndForecastWeatherProps | null>(null)

  React.useEffect(() => {
    const lat = location?.data?.latitude
    const lon = location?.data?.longitude
    ;(async () => {
      try {
        if (lat && lon) {
          const result = await Weather.getCurrentAndForecastWeather(lat, lon)
          const mappedDataProps =
            mapCurrentAndForeacastWeatherDataToProp(result)
          setWeather(mappedDataProps)
        }
      } catch (e) {
        console.error({ e })
      }
    })()
  }, [location])

  const handleUnitMeasurementChange = () => {
    setMeasurmentUnit((prevState) => {
      return prevState === 'celsius' ? 'fahrenheit' : 'celsius'
    })
  }

  return (
    <Main>
      <WeatherForecastUI
        measurementUnit={measurementUnit}
        onMeasurementUnitChange={handleUnitMeasurementChange}
        location={location.data}
        today={weather?.today}
        tomorrow={weather?.tomorrow}
        afterTomorrow={weather?.afterTomorrow}
      />
    </Main>
  )
}

export default WeatherForecast
