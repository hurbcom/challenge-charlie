import axios from 'axios';
import toastr from 'toastr';
import * as R from 'ramda';

import * as constants from '../constants';

export const getLocationWeatherUrlByName = (name) =>
    `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${name}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

export const getLocationWeatherUrlByCoordinates = (lat, long) =>
    `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${lat},${long})")&format=json`;

export const fetchLocationWeatherByNameSuccess = (weather = {}) => {
    return { type: constants.LOAD_LOCATION_WEATHER_SUCCESS, weather };
};

export const fetchCurrentLocationWeatherSuccess = (weather = {}) => {
    return { type: constants.LOAD_CURRENT_LOCATION_WEATHER_SUCCESS, weather };
};

export const fetchCurrentLocationWeatherFail = () => {
    return { type: constants.LOAD_CURRENT_LOCATION_WEATHER_FAIL };
};

export const buildWeatherState = (response) => {
    const channel = R.path(['query', 'results', 'channel'], response);
    const location = R.prop('location', channel);
    const locationName =
        location ? `${location.city},${location.region}` : null;
    const atmosphere = R.prop('atmosphere', channel);
    const wind = R.prop('wind', channel);
    const weatherType = R.path(['item', 'condition', 'text'], channel);
    const temperature = R.path(['item', 'condition', 'temp'], channel);
    const forecast = R.path(['item', 'forecast'], channel) || [];
    const firstTile = forecast[1];
    const secondTile = forecast[2];
    const weather = {
        locationName,
        atmosphere,
        wind,
        weatherType,
        temperature,
        firstTile,
        secondTile,
    };
    return weather;
};

export const fetchLocationWeatherByName = (name) => {
    return (dispatch) =>
        axios.get(getLocationWeatherUrlByName(name))
            .then(({data}) => {
                const weather = buildWeatherState(data);
                dispatch(fetchLocationWeatherByNameSuccess(weather));
            })
            .catch(() => {
                toastr.error(
                'Ocorreu um erro ao obter as informações relativas ao clima');
                dispatch(fetchLocationWeatherByNameSuccess());
            });
};

const fetchCurrentLocationWeatherByCoordinates = (position, dispatch) => {
    const { coords } = position;
    const lat = coords.latitude;
    const long = coords.longitude;
    return axios.get(getLocationWeatherUrlByCoordinates(lat, long))
        .then(({data}) => {
            const weather = buildWeatherState(data);
            dispatch(
                fetchCurrentLocationWeatherSuccess(
                    weather));
        })
        .catch(() => {
            toastr.error(
                'Ocorreu um erro ao obter as informações' +
                'relativas a localização atual');
        });
};

export const fetchCurrentLocationWeather = () => {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) =>
                    fetchCurrentLocationWeatherByCoordinates(
                        position, dispatch));
            }
            dispatch(fetchCurrentLocationWeatherFail());
        })
        .catch(() => fetchCurrentLocationWeatherFail());
};
