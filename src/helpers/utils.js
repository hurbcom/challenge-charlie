import axios from 'axios'
import config from '../config'

export const getBackgroundImage = async () => {
    const reqImage = await axios.get(config.bingApiUrl, {
        headers: { 'X-Requested-With': 'Charllie Chalenge by Tobias Viana' }
    })

    return {
        url: 'https://bing.com' + reqImage.data.images[0].url,
        copyright: reqImage.data.images[0].copyright
    }
}

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

export const getInfoFromCityName = async city => {
    const reqCityInfo = await axios.get(config.openCageApiUrl + city)
    let output = []
    let checkDuplicate = []

    reqCityInfo.data.results.map(v => {
        const c = v.components.city
        const cc = String(v.components.country_code).toUpperCase()

        if (c && checkDuplicate.indexOf(c) === -1) {
          output.push({
              city: c,
              country_code: cc
          })
          checkDuplicate.push(c)
        }
    })

    return output
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
    let today,
        tomorrow,
        afterTomorrow,
        weatherDescription,
        weatherIcon,
        humidity,
        pressure,
        windDirection,
        windSpeed

    reqWeather.data.list.map((v, i) => {
        if (!today && i === 0) {
            today = v
        }
        if (!tomorrow) {
            tomorrow = v.dt_txt.indexOf(currentDate.tomorrow) > -1 && v
        }
        if (!afterTomorrow) {
            afterTomorrow =
                v.dt_txt.indexOf(currentDate.afterTomorrow) > -1 && v
        }
    })

    weatherDescription = today.weather[0].main
    weatherIcon = today.weather[0].icon

    windDirection = degreeToCompassCard(today.wind.deg)
    windSpeed = today.wind.speed

    humidity = today.main.humidity
    pressure = today.main.pressure

    return {
        city,
        country_code,
        today,
        tomorrow,
        afterTomorrow,
        weatherDescription,
        weatherIcon,
        humidity,
        pressure,
        windDirection,
        windSpeed
    }
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

export const degreeToCompassCard = deg => {
    let index = Math.floor(deg / 22.5)
    index = index > 15 ? 0 : index
    const options = [
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW'
    ]

    return options[index]
}

export const weatherTranslateDescription = m => {
    const options = {
        Thunderstorm: { text: 'Tempestade', icon: 'Z' },
        Drizzle: { text: 'Chuvisco', icon: 'Q' },
        Rain: { text: 'Chuva', icon: 'R' },
        Snow: { text: 'Neve', icon: 'W' },
        Mist: { text: 'Nevoeiro', icon: 'M' },
        Smoke: { text: 'Fumaça', icon: 'M' },
        Haze: { text: 'Neblina', icon: 'M' },
        Dust: { text: 'Poeira', icon: 'M' },
        Fog: { text: 'Névoa', icon: 'M' },
        Sand: { text: 'Tempestande de areia', icon: 'M' },
        Ash: { text: 'Cinza vulcânica', icon: 'M' },
        Squall: { text: 'Rajadas de vento', icon: 'M' },
        Tornado: { text: 'Tornado', icon: 'M' },
        Clear: { text: 'Céu limpo', icon: 'B' },
        Clouds: { text: 'Nuvens', icon: 'Y' }
    }

    return options[m]
}

export const getCurrentTheme = t => {
    if (t > 35) return 'warm'

    if (t < 15) return 'cold'

    return 'default'
}

export const getDegree = (deg, data) => {
    return data.currentDegreeMetric === 'celsius'
        ? toCelsius(deg)
        : toFahrenheit(deg)
}

export const toCelsius = deg => Math.floor(deg - 273.15)
export const toFahrenheit = deg => Math.floor((deg * 9) / 5 - 459.67)
export const toKMH = spd => Number(spd * 3.6).toFixed(1) + 'km/h'
export const toMPH = spd => Number(spd / 0.44704).toFixed(1) + 'mph'
