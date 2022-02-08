type weatherMain =
  | 'Atmosphere'
  | 'Clear'
  | 'Clouds'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Thunderstorm'

type dailyWeather = {
  weather: {
    main: weatherMain
    temp: {
      day: number
    }
    description: string
    pressure: number
    humidity: number
    wind_speed: number
    wind_deg: number
  }[]
}

type todayWeather = {
  weather: {
    main: weatherMain
    temp: number
    description: string
    pressure: number
    humidity: number
    wind_speed: number
    wind_deg: number
  }[]
}

export interface getOpenWeatherOneCallReturn {
  current: todayWeather
  daily: dailyWeather[]
}

export interface getCurrentAndForecastWeatherReturn {
  today: todayWeather
  tomorrow: dailyWeather
  afterTomorrow: dailyWeather
}

type todayWeatherProps = {
  temperature: number
  airHumidity: string
  airPressure: number
  windSpeed: number
  windDirection: string
  dayFeeling: string
  dayFeelingIconName: weatherMain
}

type forecastWeatherProps = {
  temperature: number
}

export interface currentAndForecastWeatherProps {
  today: todayWeatherProps
  tomorrow: forecastWeatherProps
  afterTomorrow: forecastWeatherProps
}
