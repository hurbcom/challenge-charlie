import axios from 'axios'
import {
    BING_URL,
    GEOLOCATION_TOKEN,
    GEOLOCATION_URL,
    WEATHER_TOKEN,
    WEATHER_URL
} from '@/providers/EnvironmentProvider'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'

export const axiosToBing = axios.create({
    baseURL: BING_URL
})

/**************** GEOLOCATION *****************/
export const axiosToGeoLocation = axios.create({
    baseURL: GEOLOCATION_URL
})

axiosToGeoLocation.interceptors.request.use(
    async config => {
        config.params['key'] = GEOLOCATION_TOKEN
        return config
    },
    error => {
        Promise.reject(error)
    }
)
/************* END GEOLOCATION ****************/


/****************** WEATHER *******************/
export const axiosToOpenWeather = axios.create({
    baseURL: WEATHER_URL
})

axiosToOpenWeather.interceptors.request.use(
    async config => {
        config.params['APPID'] = WEATHER_TOKEN
        return config
    },
    error => {
        Promise.reject(error)
    }
)/*************** END WEATHER *****************/
