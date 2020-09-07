import { getWeatherForecast } from "../services/weather-forecast.service"

export const FETCH_WEATHERFORECAST_INIT = 'Fetch::WeatherForecast::Init'
export const FETCH_WEATHERFORECAST_DONE = 'Fetch::WeatherForecast::Done'
export const FETCH_WEATHERFORECAST_FAIL = 'Fetch::WeatherForecast::Fail'

export const fetchWeatherForecastInit = () => ({
    type: FETCH_WEATHERFORECAST_INIT
})

export const fetchWeatherForecastDone = (weatherForecast) => ({
    type: FETCH_WEATHERFORECAST_DONE,
    payload: weatherForecast
})

export const fetchWeatherForecastFail = (err) => ({
    type: FETCH_WEATHERFORECAST_FAIL
})

export const fetchWeatherForecast = () => async (dispatch, getState) => {
    try {
        dispatch(fetchWeatherForecastInit())

        const state = getState()

        const { latitude, longitude } = state.location

        const forecasts = await getWeatherForecast(latitude, longitude, 3)
        console.log(forecasts)
        dispatch(fetchWeatherForecastDone(forecasts))
    } catch (err) {
        dispatch(fetchWeatherForecastFail(err))
    }
}