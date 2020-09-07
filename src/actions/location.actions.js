import { getReadableAddress, getLattudeAndLongitude } from "../services/geocode.service"
import { fetchWeatherForecast } from "./weather-forecast.actions"
import { showNotification } from "./notifications.actions"

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
    type: FETCH_LOCATION_FAIL,
    payload: err
})

export const fetchLocationByAddress = (address) => async (dispatch) => {
    try {
        dispatch(fetchLocationInit())

        const { latitude, longitude } = await getLattudeAndLongitude(address)

        dispatch(fetchLocationDone({
            latitude,
            longitude,
            address
        }))

        dispatch(fetchWeatherForecast())
    } catch (err) {
        dispatch(fetchLocationFail(err))
        dispatch(showNotification(err.message))
    }
}

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
        dispatch(fetchLocationFail(err))
        dispatch(showNotification(err.message))
    }
}