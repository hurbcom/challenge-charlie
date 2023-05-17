import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import WeatherApi from '../WeatherApi'
import { Tuple, Weather } from '../WeatherTypes'

export default (city: string) => {
  const [forecast, setForecast] = useState<Weather[]>([])

  useEffect(() => {
    if (!city) return

    const fetchForecast = async () => {
      try {
        const { data } = await WeatherApi.getForecastByCity(city)
        setForecast(data)
      } catch (error) {
        toast.error('Ocorreu um erro ao obter previsão')
      }
    }

    fetchForecast()
  }, [city, setForecast])

  const clear = () => setForecast([])

  return [forecast, clear] as Tuple<Weather[]>
}
