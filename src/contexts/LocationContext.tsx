import { ReactNode, createContext, useEffect, useState } from 'react'

import { format } from 'date-fns'

import { parseCookies, setCookie } from 'nookies'

import { LocationData } from '~/@types/Location'
import { Today, WeatherData } from '~/@types/Weather'
import { TomorrowAndAfter, ForecastData } from '~/@types/Forecast'

import { CountiesToIBGEAPIData, CountiesData } from '~/@types/Counties'

interface LocationContextDataProps {
  isLoading: boolean

  tempType: string
  userLocation: LocationData

  today: Today | undefined
  tomorrowAndAfter: TomorrowAndAfter[] | undefined

  cities: string[] | undefined
  counties: CountiesData[] | undefined

  changeTemperatureTypeToFahrenheit: () => void

  getWeather: (city: string) => Promise<void>
  getForecast: (city: string) => Promise<void>
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
  const [isLoading, setIsLoading] = useState(true)

  const [tempType, setTempType] = useState<string>('tempC')
  const [today, setToday] = useState<Today>()
  const [tomorrowAndAfter, setTomorrowAndAfter] = useState<TomorrowAndAfter[]>()

  const [cities, setCities] = useState<string[] | undefined>()
  const [counties, setCounties] = useState<CountiesData[] | undefined>()

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

  function changeTemperatureTypeToFahrenheit() {
    if (tempType === 'tempC') {
      setTempType('tempF')
    } else {
      setTempType('tempC')
    }
  }

  async function getUserLocation(
    longitude: number | null,
    latitude: number | null,
  ) {
    if (!longitude && !latitude) {
      return console.log('')
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
    setIsLoading(true)

    try {
      const getWeather = await fetch(`/api/weather?cidade=${city}`)
      const weatherData: WeatherData = await getWeather.json()

      setToday({
        main: {
          tempC: `${Math.trunc(weatherData.main.temp)} °C`,
          tempF: `${Math.trunc(weatherData.main.temp * 1.8 + 32)} °F`,
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

      setIsLoading(false)
    } catch (err) {
      console.log('Erro: ', err)
    } finally {
      console.log('')
    }
  }

  async function getForecast(city: string) {
    setIsLoading(true)

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
            tempC: `${Math.trunc(item.main.temp)} °C`,
            tempF: `${Math.trunc(item.main.temp * 1.8 + 32)} °F`,
            dt_txt: item.dt_txt,
          }
        }),
      )
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    } finally {
      console.log('')
    }
  }

  async function getCounties() {
    try {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/municipios`,
      )
      const data: CountiesToIBGEAPIData[] = await response.json()

      const formattedCounties: CountiesData[] = data.map((item) => {
        return {
          id: item.id,
          city: item.nome,
          state: item.microrregiao.mesorregiao.UF.nome,
        }
      })

      const formattedCities: string[] = data.map((item) =>
        item.nome.toLowerCase(),
      )

      setCities(formattedCities)
      setCounties(formattedCounties)
    } catch (err) {
      console.log(err)
    } finally {
      console.log('')
    }
  }

  useEffect(() => {
    getCounties()

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

    getUserLocation(latitude, longitude)
  }, [userCoordinates])

  useEffect(() => {
    if (userLocation.city) {
      getWeather(userLocation.city)
      getForecast(userLocation.city)
    }
  }, [userLocation])

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        tempType,
        userLocation,
        today,
        tomorrowAndAfter,
        cities,
        counties,
        changeTemperatureTypeToFahrenheit,
        getWeather,
        getForecast,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
