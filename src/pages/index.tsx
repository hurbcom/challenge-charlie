import Image from 'next/image'
import { AxiosError } from 'axios'
import { ImageApi } from '../services/api/image'
import { useEffect, useState } from 'react'
import { findLocalization } from '../utils/geolocation'
import { WeatherApi } from '../services/api/weather'
import { removeSpecialChar } from '../utils/string-utils'
import { CardInfoWeather } from '../components/card-info-weather'
import Compass from '../../public/assets/icons/compass-solid.svg'
import { WeatherDay } from '../components/weather-day'
import { WeatherDays } from '../services/api/weather/types'
import { WeatherIcon } from '../components/weather-icon'
interface Props {
  imageBackground: string
}
interface Weather {
  temp: number
  weatherDescription: string
  wind: number
  pressure: number
  humidity: number
  icon: string
}

const HomePage = ({ imageBackground }: Props) => {
  const [location, setLocation] = useState<string>()
  const [weather, setWeather] = useState<Weather>()
  const [weatherDays, setWeatherDays] = useState<WeatherDays>()
  const [isShowInput, setShowInput] = useState<boolean>(false)
  const [city, setCity] = useState<string>()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<string>('')
  const [isCelsius, setCelsius] = useState<boolean>(true)


  const showTemp = (formatedTemp: string): React.ReactNode => {
    return <span className="cursor-pointer" onClick={() => setCelsius(!isCelsius)}>{formatedTemp}</span>
  }

  const formatTemp = ({temp, isCelsius}: {temp: number, isCelsius}) => {
    const symbol = `°${isCelsius ? 'C' : 'F'}`
    if (!temp) {
      return showTemp(`-- ${symbol}`)
    }
    const _temp = isCelsius ? temp : (temp * 9 / 5) + 32;
    return showTemp(`${_temp}${symbol}`)
  }


  const findWeatherAfterDays = ({lat, long} : {lat: string, long: string}) => {
    WeatherApi.weatherDays({
        exclude: ['hourly', 'minutely'],
        lat: lat,
        lon: long,
        units: 'metric'
      }).then(result => {
        setWeatherDays(result.data)
      })
  }

  const getLatLong = async () => {
    const result = await findLocalization()
    if (!result) {
      setShowInput(true)
      return
    }
    setLocation(`${result.city}, ${result.state}`)
    findWeather(result.city)
  }

  const showDay = (unixTimestamp: number) => {
    const day = new Date(unixTimestamp * 1000)
    const today = new Date().getDay()
    switch (day.getDay()) {
      case today:
        return 'Hoje'
      case today + 1:
        return 'Amanhã'
      case today + 2:
        return 'Depois de amanhã'
      default:
        return ''
    }
  }
  const backgroundSelected = (temp?: number) => {
    if (!temp) {
      return 'rgba(54,54,54, 0.7)'
    }
    const hot = 35
    const cool = 15

    const red = temp > cool ? 240 : 0
    const green = temp > cool && temp < hot ? 221 : 100
    const blue = temp < cool ? 220 : 0

    return `rgba(${red}, ${green}, ${blue}, 0.7)`
  }

  const findWeather = (city: string) => {
    setLoading(true)

    WeatherApi.show({
        q: removeSpecialChar(city.toLowerCase()),
        units: 'metric'
        }).then(({ data }) => {
            setMessageError(undefined)
            setWeather({
                temp: data.main.temp,
                weatherDescription: data.weather[0].description,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                icon: data.weather[0].icon
            })
            setLocation(data.name)
            findWeatherAfterDays({long: String(data.coord.lon), lat: String(data.coord.lat)})
        }).catch(() => {
            setWeather(undefined)
            setWeatherDays(undefined)
            setMessageError('Cidade não encontrado')
        })
        .finally(() =>{
            setLoading(false)
        })

  }

  useEffect(() => {
    getLatLong()
  }, [])
  return (
    <>
      <div className="w-screen h-screen flex justify-center bg-black">
        <div className="w-full max-w-7xl relative">
          <Image
            objectFit="cover"
            layout="fill"
            src={imageBackground || '/assets/images/image-background.jpg'}
            alt="Imagem de fundo da previsão do tempo"
          />
          <div className="relative flex flex-col items-center h-screen w-full justify-center">
            <div className="w-full h-full max-w-xl text-2xl">
              <div className="bg-white bg-opacity-75">
                <div className="flex w-full text-4xl font-medium text-gray-700 p-4">
                  <i className="mr-3">
                    <Compass className="h-12" />
                  </i>
                  {!isShowInput && (
                    <span
                      onClick={() => setShowInput(true)}
                      className="cursor-pointer"
                    >
                      {location}
                    </span>
                  )}

                  {isShowInput && (
                    <div className="flex flex-col">
                        <div className="flex flex-1 text-base gap-4 items-center justify-between">
                            <div className="flex gap-4">
                                <input
                                type="text"
                                className="px-4 py-2"
                                placeholder="Digite a cidade"
                                onChange={value => setCity(value.target.value)}
                                />
                                <button
                                    className="bg-green-800 px-4 py-2 text-white"
                                    onClick={() => findWeather(city)} disabled={isLoading}>
                                {isLoading ? 'carregando...':' Buscar previsão'}
                                </button>
                            </div>
                            <button
                            className="bg-yellow-700 px-4 py-2 text-white"
                                onClick={() => setShowInput(false)}
                            >
                                esconder
                            </button>
                        </div>
                        {messageError && (
                            <span className="text-red-600 text-xs">{messageError}</span>
                        )}
                    </div>

                  )}
                </div>
              </div>
              <WeatherDay
                icon={
                  <div className="col-span-8 w-52">
                    <WeatherIcon codeIcon={weather?.icon} />
                  </div>
                }
                className="text-white pb-10"
                style={{
                  backgroundColor: backgroundSelected(weather?.temp)
                }}
              >
                <CardInfoWeather>
                  <p>HOJE</p>
                  <p className="mb-3">{formatTemp({temp: weather?.temp, isCelsius: isCelsius})}</p>
                  <p className="mb-2">{weather?.weatherDescription}</p>
                  <div className="text-xl">
                    <p>Vento: {weather?.wind || '--'}km/h</p>
                    <p>Humidade: {weather?.humidity || '--'}%</p>
                    <p>Pressão: {weather?.pressure || '--'}hPA</p>
                  </div>
                </CardInfoWeather>
              </WeatherDay>
              {weatherDays?.daily?.slice(1, 3).map(_weather => (
                <div key={_weather.dt.toString()}>
                  <WeatherDay
                    className="text-white"
                    style={{
                      backgroundColor: backgroundSelected(_weather.temp.day)
                    }}
                    icon={
                      <div className="col-span-8 w-20">
                        <WeatherIcon codeIcon={_weather.weather[0]?.icon} />
                      </div>
                    }
                  >
                    <p>{showDay(_weather.dt)}</p>
                    <p>{formatTemp({temp: _weather.temp.day, isCelsius: isCelsius})}</p>
                  </WeatherDay>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const res = await ImageApi.getImageBackground({
      format: 'js',
      idx: 0,
      mkt: 'pt-BR',
      n: 1
    })
    if (!res.data.images[0]?.url) {
      return {}
    }
    return {
      props: {
        imageBackground:
          process.env.NEXT_PUBLIC_APi_URL_IMAGE + res.data.images[0].url
      }
    }
  } catch (error) {
    const err = error as AxiosError
    console.error(err.code, err.message)
    return {
      props: {
        imageBackground: '/assets/images/image-background.jpg'
      }
    }
  }
}

export default HomePage
