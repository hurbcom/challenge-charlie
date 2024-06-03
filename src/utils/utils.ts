import { getLocation } from "@/services/GeolocationService/geolocation.service"
import { getBackground } from "@/services/BackgroundService/background.service"
import { getWeather } from "@/services/WeatherService/weather.service"
import { WeatherArray, WeatherData } from "@/@types/types"

const fetchBackground = async () => {
  try {
    const res = await getBackground()

    if (res && res.images) {
      return res.images[0].url
    } 
  } catch (error) {
    console.error('Error fetching background:', error)
  }
}

const fetchLocation = async (location: string | { latitude: number; longitude: number }) => {
    try {
      const res = await getLocation(location)

      if (res && res.results) {
        return (res.results[0].components._normalized_city || res.results[0].components.city || res.results[0].components.state) + ', ' + res.results[0].components.state
      }
    } catch (error) {
      return 'error fetching location'
    }
}

const fetchWeather = async (location: string) => {
  try {
    const res = await getWeather(location)
    if (res && res.list) {
      return res.list
    }
  } catch (error) {
    return 'error fetching weather'
  }
}

const handleTemperature = (temp: number, unitInCelsius: boolean) => {
  return unitInCelsius ? temp : (temp * 1.8) + 32
}

const handleBackgroundColor = (temperature: number | null) => {
  if (temperature === null) {
    return 'linear-gradient(to bottom, rgba(209, 213, 219, 0.9), rgba(209, 213, 219, 0.9))'
  }

  if (temperature < 15) {
    const intensity = Math.floor((temperature / 15) * 200)
    return `linear-gradient(to bottom, rgba(56, 189, 248, 0.9), rgba(56, 189, 248, ${0.7 + intensity / 500}))`
  } else if (temperature >= 15 && temperature <= 35) {
    const intensity = Math.floor(((temperature - 15) / 20) * 200)
    return `linear-gradient(to bottom, rgba(250, 204, 21, 0.9), rgba(250, 204, 21, ${0.7 + intensity / 500}))`
  } else if (temperature > 35) {
    const intensity = Math.floor(((temperature - 35) / 15) * 200)
    return `linear-gradient(to bottom, rgba(248, 113, 113, 0.9), rgba(248, 113, 113, ${0.7 + intensity / 500}))`
  } else {
    return 'linear-gradient(to bottom, rgba(209, 213, 219, 0.9), rgba(209, 213, 219, 0.9))'
  }
}

const handleTodaysWeather = (weathers: WeatherArray) => {
  if (!weathers || weathers.length === 0) {
    return
  }

  const now = new Date()
  const todayDate = now.toISOString().split('T')[0]

  weathers.sort((a, b) => new Date(a.dt_txt).getTime() - new Date(b.dt_txt).getTime())

  const currentWeather = weathers.find(weather => {
    const weatherDate = new Date(weather.dt_txt)
    const weatherDateString = weatherDate.toISOString().split('T')[0]

    return weatherDateString === todayDate && weatherDate.getTime() > now.getTime()
  }) as WeatherData

  return currentWeather
}


const handleNextDaysWeather = (weathers: WeatherArray, currentWeather: WeatherData) => {
  if (!weathers || !currentWeather) {
    return []
  }

  const initialDate = new Date(currentWeather.dt_txt)

  const targetDate1 = new Date(initialDate)
  targetDate1.setDate(initialDate.getDate() + 1)
  const targetDate2 = new Date(initialDate)
  targetDate2.setDate(initialDate.getDate() + 2)

  const formattedTargetDate1 = targetDate1.toISOString().slice(0, 10) + " " + targetDate1.toTimeString().slice(0, 8)
  const formattedTargetDate2 = targetDate2.toISOString().slice(0, 10) + " " + targetDate2.toTimeString().slice(0, 8)

  const weather1 = weathers.find(weather => weather.dt_txt === formattedTargetDate1)
  const weather2 = weathers.find(weather => weather.dt_txt === formattedTargetDate2)

  return [weather1, weather2].filter(Boolean) as WeatherArray
}

const handleTipOrError = (error: boolean): string => {
  if (error) {
    return 'Sua busca não retornou resultados. Que tal tentar novamente?'
  } else {
    return 'Dica: Não encontrou a cidade que procura? Experimente separar a cidade e o estado por vírgula.'
  }
}

export { fetchBackground, fetchLocation, fetchWeather, handleTemperature , handleBackgroundColor, handleTodaysWeather, handleNextDaysWeather, handleTipOrError }