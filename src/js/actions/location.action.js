// importar types
import * as types from './actionTypes'
import axios from 'axios';

export const getWeather = () => {
    return (dispatch) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                axios.get(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${position.coords.latitude},${position.coords.longitude})")&format=json`)
                    .then(res => res.data)
                    .then(data => dispatch({
                        type: types.GET_WEATHER,
                        payload: data.query.results.channel
                    }));
            }, (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        dispatch({
                            type: types.NO_LOCATION,
                            error:error.PERMISSION_DENIED
                        })
                        break;
                    case error.POSITION_UNAVAILABLE:
                        dispatch({
                            type: types.NO_LOCATION
                        })
                        break;
                    case error.TIMEOUT:
                        dispatch({
                            type: types.NO_LOCATION
                        })
                        break;
                    case error.UNKNOWN_ERROR:
                        dispatch({
                            type: types.NO_LOCATION
                        })
                        break;
                }
            })
        } else {
            console.log('ok');
            dispatch({
                type: types.NO_LOCATION
            })
        }
    }
}