import { GetWeatherResponse, WeatherState } from './open-weather.service.types'

function getWindDirection(deg: number) {
    const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']
    const index = Math.round(deg / 45) % 8
    return directions[index]
}

export function getThreeDaysWeather(data: GetWeatherResponse) {
    const today = new Date()

    const list = data.list

    const todayWeather = list.find((item: any) => {
        const dt = new Date(item.dt_txt)
        return dt.getDate() === today.getDate()
    })

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowWeather = list.find((item: any) => {
        const dt = new Date(item.dt_txt)
        return dt.getDate() === tomorrow.getDate() && dt.getHours() === 12
    })

    const afterTomorrow = new Date(tomorrow)
    afterTomorrow.setDate(afterTomorrow.getDate() + 1)
    const afterTomorrowWeather = list.find((item: any) => {
        const dt = new Date(item.dt_txt)
        return dt.getDate() === afterTomorrow.getDate() && dt.getHours() === 12
    })

    console.log(todayWeather, tomorrowWeather, afterTomorrowWeather)

    if (!todayWeather || !tomorrowWeather || !afterTomorrowWeather) {
        throw new Error('Could not get next three days weather')
    }

    const result: WeatherState[] = [
        {
            temp: todayWeather.main.temp,
            description: todayWeather.weather[0].description,
            pressure: todayWeather.main.pressure,
            humidity: todayWeather.main.humidity,
            wind: todayWeather.wind.speed,
            windDirection: getWindDirection(todayWeather.wind.deg),
        },
        {
            temp: tomorrowWeather.main.temp,
            description: tomorrowWeather.weather[0].description,
            pressure: tomorrowWeather.main.pressure,
            humidity: tomorrowWeather.main.humidity,
            wind: tomorrowWeather.wind.speed,
            windDirection: getWindDirection(tomorrowWeather.wind.deg),
        },
        {
            temp: afterTomorrowWeather.main.temp,
            description: afterTomorrowWeather.weather[0].description,
            pressure: afterTomorrowWeather.main.pressure,
            humidity: afterTomorrowWeather.main.humidity,
            wind: afterTomorrowWeather.wind.speed,
            windDirection: getWindDirection(afterTomorrowWeather.wind.deg),
        },
    ]

    return result
}
