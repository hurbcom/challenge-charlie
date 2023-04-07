import { ReactNode, createContext, useEffect, useState } from 'react'

import { format } from 'date-fns'

import { parseCookies, setCookie } from 'nookies'

import { LocationData } from '~/@types/Location'
import { Today, WeatherData } from '~/@types/Weather'
import { TomorrowAndAfter, ForecastData } from '~/@types/Forecast'

interface LocationContextDataProps {
  today: Today | undefined
  tomorrowAndAfter: TomorrowAndAfter[] | undefined
}

interface LocationContextProviderProps {
  children: ReactNode
}

export const LocationContext = createContext<LocationContextDataProps>(
  {} as LocationContextDataProps,
)

export function LocationContextProvider({
  children,
}: LocationContextProviderProps) {
  const { '@challenge-charlie': currentLocationData } = parseCookies()

  const [today, setToday] = useState<Today>()
  const [tomorrowAndAfter, setTomorrowAndAfter] = useState<TomorrowAndAfter[]>()

  const [userCoordinates, setUserCoordinates] = useState<{
    latitude: number | null
    longitude: number | null
  }>({
    latitude: null,
    longitude: null,
  })

  const [userLocation, setUserLocation] = useState<LocationData>({
    city: null,
    state: null,
  })

  async function getLocation(
    longitude: number | null,
    latitude: number | null,
  ) {
    if (!longitude && !latitude) {
      return console.log('Hm...')
    }

    if (!currentLocationData) {
      try {
        const locationResponse = await fetch(
          `/api/location?lon=${longitude}&lat=${latitude}`,
        )
        const newLocationData: LocationData = await locationResponse.json()

        const { city, state } = newLocationData

        setUserLocation({ city, state })

        setCookie(null, '@challenge-charlie', JSON.stringify(newLocationData), {
          maxAge: 60 * 60 * 4, // 4 Horas
          path: '/',
        })
      } catch (err) {
        console.log(err)
      } finally {
        console.log('')
      }
    }
  }

  async function getWeather(city: string) {
    try {
      const getWeather = await fetch(`/api/weather?cidade=${city}`)
      const weatherData: WeatherData = await getWeather.json()

      setToday({
        main: {
          temp: Math.trunc(weatherData.main.temp),
          humidity: weatherData.main.humidity,
          pressure: weatherData.main.pressure,
        },
        weather: {
          icon: weatherData.weather[0].icon,
          description: weatherData.weather[0].description,
        },
        wind: {
          deg: weatherData.wind.deg,
          speed: weatherData.wind.speed,
        },
      })
    } catch (err) {
      console.log(err)
    } finally {
      console.log('')
    }
  }

  async function getForecast(city: string) {
    try {
      const getForecast = await fetch(`/api/forecast?cidade=${city}`)
      const { list }: ForecastData = await getForecast.json()

      const today = format(new Date(), 'dd/MM/yyyy')

      const formattedList = list.filter(
        (obj, index, self) =>
          self.findIndex(
            (item) => item.dt_txt === obj.dt_txt && item.dt_txt !== today,
          ) === index,
      )

      setTomorrowAndAfter(
        formattedList.map((item) => {
          return {
            temp: Math.trunc(item.main.temp),
            dt_txt: item.dt_txt,
          }
        }),
      )
    } catch (err) {
      console.log(err)
    } finally {
      console.log('')
    }
  }

  useEffect(() => {
    if ('geolocation' in navigator && !currentLocationData) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords

        setUserCoordinates({ latitude, longitude })
      })
    } else {
      const { city, state }: LocationData = JSON.parse(currentLocationData)

      setUserLocation({ city, state })
    }
  }, [])

  useEffect(() => {
    const { latitude, longitude } = userCoordinates

    getLocation(latitude, longitude)
  }, [userCoordinates])

  useEffect(() => {
    if (userLocation.city) {
      getWeather(userLocation.city)
      getForecast(userLocation.city)
    }
  }, [userLocation])

  return (
    <LocationContext.Provider value={{ today, tomorrowAndAfter }}>
      {children}
    </LocationContext.Provider>
  )
}
