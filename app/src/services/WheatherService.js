import axios from 'axios'

export default class WeatherService {
    constructor() {
        this.app_id = '7ba73e0eb8efe773ed08bfd0627f07b8'
    }

    async getWheather(location, units = 'metric') {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${this.app_id}&units=${units}`)
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}