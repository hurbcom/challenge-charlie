// importar types
import * as types from './actionTypes'
import axios from 'axios';

export const getWeather = () => {
    return (dispatch) => {
        if (navigator.geolocation) {
            dispatch({
                type: types.SEARCHING            
            })
            axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBTGPzpY3dqkp2sUYNdUsKXDraEGz9gz2g').then(res => console.log(res));
            
            console.log(navigator.geolocation);
            
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                axios.get(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${position.coords.latitude},${position.coords.longitude})")&format=json`)
                    .then(res => res.data)
                    .then(data => 
                    data.query.results == null
                    ? dispatch({
                        type: types.NO_LOCATION
                    })
                    : dispatch({
                        type: types.GET_WEATHER,
                        payload: data.query.results.channel
                        
                    })
                    );
            }, (error) => {
                console.log('oh no');
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
                    default:
                        return 'error'
                }
            })
        } else {

            dispatch({
                type: types.NO_LOCATION
            })
        }
    }
}