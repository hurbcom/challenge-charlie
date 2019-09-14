import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';
import axios from 'axios';

const openWeatherKey = '63f579b5964ac8e740baf76c46b58699';

export const fetchWeather = (tim) => {
    return {
        type: actionTypes.FETCH_WEATHER,
        tim: tim
    }
}

export const finishedLoading = () => {
    return {
        type: actionTypes.FINISH_LOADING,
    }
}

export const getPlace = (place) => {
    return async dispatch => {
        try {
            let res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${place}&lang=pt_br&APPID=${openWeatherKey}&mode=json`)
            await dispatch(fetchWeather(res))
        } 
        catch (err) {
            
        }
        finally {
            dispatch(finishedLoading())
        }
    }
}