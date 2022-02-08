import { currentAndForecastWeatherProps } from '../types/weather'
const degToCompass = (deg: number) => {
  const compasss = Math.floor(deg / 45)
  const compassses = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO']
  return compassses[compasss % 45]
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const mapTodayWeatherDataToProp = (data: any) => {
  if (!data) return data
  const { weather } = data

  const compass = degToCompass(data.wind_deg)
  const dayFeeling = capitalizeFirstLetter(weather[0].description)
  return {
    temperature: data.temp,
    airHumidity: data.humidity,
    airPressure: data.pressure,
    windSpeed: data.wind_speed,
    windDirection: compass,
    dayFeeling: dayFeeling,
    dayFeelingIconName: weather[0].main,
  }
}

const mapWeatherForecastToProps = (data: any) => {
  return {
    temperature: data.temp.day,
  }
}

export const mapCurrentAndForeacastWeatherDataToProp = (data: any) => {
  const today = mapTodayWeatherDataToProp(data.today)
  const tomorrow = mapWeatherForecastToProps(data.tomorrow)
  const afterTomorrow = mapWeatherForecastToProps(data.afterTomorrow)

  return { today, tomorrow, afterTomorrow } as currentAndForecastWeatherProps
}
