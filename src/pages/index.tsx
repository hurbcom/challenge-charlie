import Image from 'next/image'
import { AxiosError } from 'axios'
import { ImageApi } from '../services/api/image'
import { useEffect, useState } from 'react'
import { findLocalization } from '../utils/geolocation'
import { WeatherApi } from '../services/api/weather'
import { removeSpecialChar } from '../utils/string-utils'
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
    console.info(result)
    console.info(removeSpecialChar(result.city))
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
            <div className="w-full h-full max-w-xl">
              <div className="bg-white opacity-50">
                <div className="w-full text-4xl font-medium text-gray-700 p-4">
                  {location}
                </div>
              </div>
              <div className="bg-yellow-200 opacity-50 p-4 grid grid-cols-12 text-white">
                <div className="col-span-8">Tempo</div>
                <div className="col-span-4 flex flex-col">
                  <p>{weather.temp}</p>
                  <p>{weather.weatherDescription}</p>
                  <p>{weather.wind}</p>
                  <p>{weather.humidity}</p>
                  <p>{weather.pressure}</p>
                </div>
              </div>
              <div className="bg-yellow-300 opacity-50 p-4 grid grid-cols-12 text-white">
                <div className="col-span-8">
                  <span className="opacity-100">Amanhã</span>
                </div>
                <div className="col-span-4">Amanhã</div>
              </div>
              <div className="bg-yellow-400 opacity-50 p-4 grid grid-cols-12 text-white">
                <div className="col-span-8">Depois Amanhã</div>
                <div className="col-span-4">Depois Amanhã</div>
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
