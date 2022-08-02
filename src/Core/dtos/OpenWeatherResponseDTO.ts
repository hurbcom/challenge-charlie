export interface OpenWeatherResponseDTO {
  base: string
  clouds: Clouds
  cod: number
  coord: Coordinates
  dt: number
  id: number
  main: Main
  name: number
  sys: Sys
  timezone: number
  visibility: number
  weather: Weather[]
  wind: Wind
}

interface Clouds {
  all: number
}

type WeatherMain =
  | 'Atmosphere'
  | 'Clear'
  | 'Clouds'
  | 'Drizzle'
  | 'Fog'
  | 'Mist'
  | 'Rain'
  | 'Snow'
  | 'Thunderstorm'

export interface Coordinates {
  lon: number
  lat: number
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

interface Weather {
  id: number
  main: WeatherMain
  description: string
  icon: string
}

interface Wind {
  speed: number
  deg: number
}

export interface OpenWeatherForecastResponseDTO {
  lat: number
  lon: number
  daily: DailyForecastWeather[]
  current: ForecastWeather
}

interface BaseWeatherInfos {
  wind_speed: number
  humidity: number
  pressure: number
  weather: DayWeather[]
  wind_deg: number
}

interface ForecastWeather extends BaseWeatherInfos {
  temp: number
}

export interface DailyForecastWeather extends BaseWeatherInfos {
  temp: DailyTemperature
}

interface DailyTemperature {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

export interface DayWeather {
  description: string
  icon: string
  id: number
  main: string
}
