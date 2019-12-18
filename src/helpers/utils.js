import axios from 'axios'
import config from '../config'

export const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                resolve(pos)
            },
            err => {
                reject(err)
            }
        )
    })
}

export const getWeatherInfoFromCoords = async (lat, long) => {
    const coordsParam = `${lat},${long}`
    const reqCityInfo = await axios.get(config.openCageApiUrl + coordsParam)

    return getWeatherInfo(
        reqCityInfo.data.results[0].components.city,
        reqCityInfo.data.results[0].components.country_code
    )
}

export const getWeatherInfo = async (city, country_code) => {
    const cityInfoParam = `${city},${country_code}`
    const reqWeather = await axios.get(config.openWeatherApiUrl + cityInfoParam)
    const currentDate = getDateString()
    let today, tomorrow, afterTomorrow

    reqWeather.data.list.map(v => {
        if (!today) {
            today = v.dt_txt.indexOf(currentDate.today) > -1 && v
        }
        if (!tomorrow) {
            tomorrow = v.dt_txt.indexOf(currentDate.tomorrow) > -1 && v
        }
        if (!afterTomorrow) {
            afterTomorrow =
                v.dt_txt.indexOf(currentDate.afterTomorrow) > -1 && v
        }
    })

    return { city, country_code, today, tomorrow, afterTomorrow }
}

export const getDateString = () => {
    const leadingZero = num => (num < 10 ? `0${num}` : num)
    const concatDate = d => {
        return (
            d.getFullYear() +
            '-' +
            leadingZero(d.getMonth() + 1) +
            '-' +
            leadingZero(d.getDate())
        )
    }

    let today = new Date()
    today = concatDate(today)

    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow = concatDate(tomorrow)

    let afterTomorrow = new Date()
    afterTomorrow.setDate(afterTomorrow.getDate() + 2)
    afterTomorrow = concatDate(afterTomorrow)

    return {
        today,
        tomorrow,
        afterTomorrow
    }
}

export const toCelsius = deg => Math.floor(deg - 273.15)

export const toFahrenheit = deg => Math.floor((deg * 9) / 5 - 459.67)
