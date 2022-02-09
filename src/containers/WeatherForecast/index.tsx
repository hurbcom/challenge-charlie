import React from 'react'
import { Main, WeatherForecast as WeatherForecastUI } from '../../components'
import { useLocation } from '../../hooks'
import { Weather, Geocoding } from '../../services'
import { currentAndForecastWeatherProps } from '../../types/weather'
import { mapCurrentAndForeacastWeatherDataToProp } from '../../helpers/weather'
import { Template } from '../../UI'

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
    const lat = (location as any)?.data?.latitude
    const lon = (location as any)?.data?.longitude
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

  const handleCityInputChange = async (value: string) => {
    const city = value && value.split(',')[0]
    const coords = await Geocoding.foward(city)
    if (coords) (setLocation as any)({ data: { ...coords }, loading: false })
  }

  const handleUnitMeasurementChange = () => {
    setMeasurmentUnit((prevState) => {
      return prevState === 'celsius' ? 'fahrenheit' : 'celsius'
    })
  }

  return (
    <Template>
      <Main>
        <WeatherForecastUI
          onCityInputChange={handleCityInputChange}
          measurementUnit={measurementUnit}
          onMeasurementUnitChange={handleUnitMeasurementChange}
          location={(location as any)?.data}
          today={weather?.today}
          tomorrow={weather?.tomorrow}
          afterTomorrow={weather?.afterTomorrow}
        />
      </Main>
    </Template>
  )
}

export default WeatherForecast
