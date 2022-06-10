import axios from "axios"

const fetchWeatherDataByLocale = async locale => {
    if (locale !== '') {
        const localeEncoded = encodeURIComponent(locale)
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${localeEncoded}&appid=${process.env.OPEN_WEATHER_API_KEY}`

            const { data } = await axios.get(url)
            if (data && data.list) {
                return parseData(data)
            }
        } catch (error) {
            throw Error("Weather data can't be reached")
        }
    }
}

const parseData = data => {

    /**
     * We are using an endpoint that returns 5 days forecast
     * the code below is to parse and collect only the first 3 days
     */

    const { list, city } = data
    const { lat, lon } = city.coord
    const days = {}
    list.reverse().forEach(w => {
        const date = new Date(w.dt_txt)
        const day = date.getDate()
        days[day] = w
    })

    const dataParsed = []
    Object.keys(days).forEach((v, i) => {
        if (i < 3) {
            dataParsed.push(days[v])
        }
    })

    return { data: dataParsed, lat, lon }
}

export {
    fetchWeatherDataByLocale
}