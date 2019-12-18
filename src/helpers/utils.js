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

    let today = new Date()
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    let afterTomorrow = new Date()
    afterTomorrow.setDate(afterTomorrow.getDate() + 2)

}
