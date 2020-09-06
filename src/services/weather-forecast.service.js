import { convertCelciusToFahrenheit } from "../utils/convert-celcius-to-fahrenheit"
import { getCelciusColor } from "../utils/get-celcius-color"

const url = `http://api.openweathermap.org/data/2.5/onecall?APPID=${process.env.OPENWEATHER_APPID}&exclude=hourly,minutely&units=metric`

export const getWeatherForecast = async (lat, lon) => {
    const response = await fetch(`${url}&lat=${lat}&lon=${lon}`)
    const data = await response.json()

    const currentCelciusTemp = Math.round(data.current.temp)
    const tomorrowCelciusTemp = Math.round(data.daily[0].temp.day)
    const afterTomorrowCelciusTemp = Math.round(data.daily[1].temp.day)

    return {
        today: mapForecast(currentCelciusTemp, data.current),
        tomorrow: mapForecast(tomorrowCelciusTemp, data.daily[1]),
        afterTomorrow: mapForecast(afterTomorrowCelciusTemp, data.daily[2])
    }
}

const mapForecast = (celciusTemp, s) => ({
    celcius: celciusTemp,
    fahrenheit: convertCelciusToFahrenheit(celciusTemp),
    color: getCelciusColor(celciusTemp),
    humidity: s.humidity,
    pressure: s.pressure,
    windSpeed: s.wind_speed,
    date: new Date(s.dt * 1000).toLocaleDateString()
})