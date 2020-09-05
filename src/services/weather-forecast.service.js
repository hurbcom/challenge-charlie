import { convertCelciusToFahrenheit } from "../utils/convert-celcius-to-fahrenheit"
import { getCelciusColor } from "../utils/get-celcius-color"

const url = `http://api.openweathermap.org/data/2.5/onecall?APPID=${process.env.OPENWEATHER_APPID}&exclude=hourly,minutely&units=metric`

export const getWeatherForecast = async (lat, lon) => {
    const response = await fetch(`${url}&lat=${lat}&lon=${lon}`)
    const json = await response.json()

    const currentCelciusTemp = Math.round(json.current.temp)
    const tomorrowCelciusTemp = Math.round(json.daily[0].temp.day)
    const afterTomorrowCelciusTemp = Math.round(json.daily[1].temp.day)

    return {
        today: {
            celcius: currentCelciusTemp,
            fahrenheit: convertCelciusToFahrenheit(currentCelciusTemp),
            color: getCelciusColor(currentCelciusTemp),
            humidity: json.current.humidity,
            pressure: json.current.pressure,
            windSpeed: json.current.wind_speed
        },
        tomorrow: {
            celcius: tomorrowCelciusTemp,
            fahrenheit: convertCelciusToFahrenheit(tomorrowCelciusTemp),
            color: getCelciusColor(currentCelciusTemp),
            humidity: json.daily[0].humidity,
            pressure: json.daily[0].pressure,
            windSpeed: json.daily[0].wind_speed
        },
        afterTomorrow: {
            celcius: afterTomorrowCelciusTemp,
            fahrenheit: convertCelciusToFahrenheit(afterTomorrowCelciusTemp),
            color: getCelciusColor(currentCelciusTemp),
            humidity: json.daily[1].humidity,
            pressure: json.daily[1].pressure,
            windSpeed: json.daily[1].wind_speed
        }
    }
}