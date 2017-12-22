import axios from 'axios';
import toastr from 'toastr';

import * as constants from '../constants';

const getLocationWeatherUrlByName = (name) =>
    `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${name}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

const fetchLocationWeatherByNameSuccess = (weather = {}) => {
    return { type: constants.LOAD_LOCATION_WEATHER_SUCCESS, weather };
};

export const fetchLocationWeatherByName = (name) => {
    return (dispatch) =>
        axios.get(getLocationWeatherUrlByName(name))
            .then(({data}) => {
                console.log(data);
                dispatch(fetchLocationWeatherByNameSuccess(data));
            })
            .catch(() => {
                toastr.error(
                'Ocorreu um erro ao obter as informações relativas ao clima');
                dispatch(fetchLocationWeatherByNameSuccess());
            });
};
