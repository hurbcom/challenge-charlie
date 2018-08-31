// importar types
import * as types from './actionTypes'
import axios from 'axios';

export const startSearching = () => {
    return {
        type: types.IS_SEARCHING
    }
}
export const stopSearching = () => {
    return {
        type: types.NOT_SEARCHING
    }
}

export const search = (local) => {
    return (dispatch)=>{
        dispatch({
            type: types.SEARCHING,
        })
        axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${local}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
        .then(res => {
            console.log(res.data);
            console.log(local);
            
            return res.data})
        .then(data => 
            (data.query.results == null || !data.query.results.channel.astronomy)
            ? dispatch({
                type: types.NO_LOCATION
            })
            : dispatch({
                type: types.GET_WEATHER,
                payload: data.query.results.channel
                
            })
            )
            .catch(error => 
                dispatch({
                    type: types.NO_LOCATION
                })
            );
    }
}