import axios from "axios"
const API_KEY = "2c3ea34fd025a40e7233a29229a157f4"
const weatherApi = axios.create({baseURL: "https://api.openweathermap.org/data/2.5/"})

async function getCurrentWeather({latitude, longitude}) {
    const response = await weatherApi.get(`/weather/?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=pt_br&units=metric`)
    return response.data
}

async function getNextDaysWeather({latitude, longitude}) {
    const response = await weatherApi.get(`/forecast/?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=pt_br&units=metric`)
    return response.data
}

async function getFullWeather(coords) {
    const nextDaysResponse = await getNextDaysWeather(coords)
    const currentDayResponse = await getCurrentWeather(coords)

    return {
        currentDay: {
            temperature: currentDayResponse.main.temp,
            description: currentDayResponse.weather[0].description,
            humidity: currentDayResponse.main.humidity,
            wind: currentDayResponse.wind.speed,
            pressure: currentDayResponse.main.pressure,
            iconId: currentDayResponse.weather[0].icon
        },
        tomorrow: {
            temperature: nextDaysResponse.list[5].main.temp,
        },
        afterTomorrow: {
            temperature: nextDaysResponse.list[9].main.temp
        }
    }
}

export default {getFullWeather}