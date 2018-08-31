// importar types
import * as types from './actionTypes'
import axios from 'axios';

export const getWeather = () => {
    return (dispatch) => {
        if (navigator.geolocation) {
            // abre o loading e informa que está procurando
            dispatch({
                type: types.SEARCHING            
            })       
            //pega a localizaação 
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                // axios para requisição do clima
                axios.get(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${position.coords.latitude},${position.coords.longitude})")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
                    .then(res => {
                        console.log(res.data);
                        return res.data
                    })
                    .then(data => 
                    data.query.results == null
                    ? dispatch({
                        type: types.NO_LOCATION
                    })
                    : dispatch({
                        type: types.GET_WEATHER,
                        payload: data.query.results.channel
                        
                    })
                    ).catch(error => 
                        dispatch({
                            type: types.NO_LOCATION
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
            },{ maximumAge: 15000,
                // time out para localização
                timeout: 25000,
                enableHighAccuracy: false
              })
        } else {

            dispatch({
                type: types.NO_LOCATION
            })
        }
    }
}