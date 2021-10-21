import Image from 'next/image'
import { AxiosError } from 'axios'
import { ImageApi } from '../services/api/image'
import { useEffect, useState } from 'react'
import { findLocalization } from '../utils/geolocation'
import { WeatherApi } from '../services/api/weather'
import { removeSpecialChar } from '../utils/string-utils'
import { CardInfoWeather } from '../components/card-info-weather'
import SunnyDay from '../../public/assets/icons/weather/wi-day-sunny.svg'
import Compass from '../../public/assets/icons/compass-solid.svg'
interface Props {
  imageBackground: string
}
interface Weather {
  temp: number
  weatherDescription: string
  wind: number
  pressure: number
  humidity: number
}

const HomePage = ({ imageBackground }: Props) => {
  const [location, setLocation] = useState<string>()
  const [weather, setWeather] = useState<Weather>()
  const getLatLong = async () => {
    const result = await findLocalization()
    setLocation(`${result.city} - ${result.state}`)
    WeatherApi.show({ q: removeSpecialChar(result.city.toLowerCase()) }).then(
      ({ data }) => {
        console.info(data)
        setWeather({
          temp: data.main.temp,
          weatherDescription: data.weather[0].description,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          pressure: data.main.pressure
        })
      }
    )
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
                  {location}
                </div>
              </div>
              <div
                className="p-4 grid grid-cols-12 text-white pb-10"
                style={{
                  backgroundColor: 'rgba(252, 248, 18, 0.8)',
                  textShadow: 'text-shadow: 2px 2px #a3a3a3'
                }}
              >
                <div className="col-span-8 max-h-40">
                  {/* <Image
                    src="/assets/icons/weather/wi-day-sunny.svg"
                    width="100%"
                    height="100%"
                    alt="ícone tempo"
                  /> */}
                  <SunnyDay className="fill-current text-white w-full h-full" />
                </div>
                <CardInfoWeather>
                  <p>HOJE</p>
                  <p className="mb-3">{weather?.temp || '--'}°C</p>
                  <p className="mb-2">{weather?.weatherDescription}</p>
                  <div className="text-xl">
                    <p>Vento: {weather?.wind || '--'}km/h</p>
                    <p>Humidade: {weather?.humidity || '--'}%</p>
                    <p>Pressão: {weather?.pressure || '--'}hPA</p>
                  </div>
                </CardInfoWeather>
              </div>
              <div className="bg-yellow-300 bg-opacity-75 p-4 grid grid-cols-12 text-white pb-10">
                <div className="col-span-8">
                  <span className="opacity-100">
                    <p>Amanhã</p>
                    <p>°C</p>
                  </span>
                </div>
                <CardInfoWeather>Amanhã</CardInfoWeather>
              </div>
              <div
                className="bg-yellow-400 opacity-80 p-4 grid grid-cols-12 text-white pb-10"
                style={{
                  textShadow: 'text-shadow: 1px 1px #a3a3a3'
                }}
              >
                <div className="col-span-8">
                  <p>Depois Amanhã</p>
                  <p>°C</p>
                </div>
                <CardInfoWeather>
                  <p>Depois Amanhã</p>
                  <p> °C</p>
                </CardInfoWeather>
              </div>
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
    console.info(err.code, err.message)
    return {
      props: {
        imageBackground: '/assets/images/image-background.jpg'
      }
    }
  }
}

export default HomePage
