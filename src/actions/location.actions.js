import { getReadableAddress } from "../services/reverse-geocode.service"
import { fetchWeatherForecast } from "./weather-forecast.actions"

export const FETCH_LOCATION_INIT = 'Fetch::Location::Init'
export const FETCH_LOCATION_DONE = 'Fetch::Location::Done'
export const FETCH_LOCATION_FAIL = 'Fetch::Location::Fail'

export const fetchLocationInit = () => ({
    type: FETCH_LOCATION_INIT
})

export const fetchLocationDone = (location) => ({
    type: FETCH_LOCATION_DONE,
    payload: location
})

export const fetchLocationFail = (err) => ({
    type: FETCH_LOCATION_FAIL
})

export const fetchLocation = () => async (dispatch) => {
    try {
        dispatch(fetchLocationInit())
        
        const { coords } = await new Promise((resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition((position) => {
                resolve(position)
            }, (err) => {
                reject(err)
            })
        });
        
        const address = await getReadableAddress(coords.latitude, coords.longitude)
        
        const { latitude, longitude } = coords

        dispatch(fetchLocationDone({
            latitude,
            longitude,
            address
        }))

        dispatch(fetchWeatherForecast())
    } catch (err) {
        console.log(err)
        dispatch(fetchLocationFail(err))
    }
}