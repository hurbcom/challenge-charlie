import { convertCelciusToFahrenheit } from "../utils/convert-celcius-to-fahrenheit"
import { getCelciusColor } from "../utils/get-celcius-color"

const url = `http://api.openweathermap.org/data/2.5/onecall?APPID=${process.env.OPENWEATHER_APPID}&exclude=hourly,minutely&units=metric&lang=pt_br`

export const getWeatherForecast = async (lat, lon, count) => {
    const response = await fetch(`${url}&lat=${lat}&lon=${lon}`)
    const data = await response.json()

    return data.daily.slice(0, count).map(d => mapForecast(d))
}

const mapForecast = (data) => {
    const celciusTemp = Math.round(data.temp.day)
    return {
        temps: {
            'celcius': {
                value: celciusTemp,
                unit: '°C',
                selected: true
            },
            'fahrenheit': {
                value: convertCelciusToFahrenheit(celciusTemp),
                unit: '°F',
                selected: false
            }
        },
        color: getCelciusColor(celciusTemp),
        humidity: data.humidity,
        pressure: data.pressure,
        windSpeed: Math.round(data.wind_speed * 3.6),
        date: new Date(data.dt * 1000).toLocaleDateString(),
        icon: data.weather[0].icon,
        description: data.weather[0].description
    }
}