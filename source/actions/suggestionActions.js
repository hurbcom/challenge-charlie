import axios from 'axios';
import * as R from 'ramda';

import * as constants from '../constants';

export const getLocationWeatherUrlByName = (name) =>
    `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${name}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

export const fetchLocationNameSuccess = (name) => {
    return { type: constants.LOAD_LOCATION_NAME_SUGGESTION_SUCCESS, name };
};

export const fetchLocationNameFail = () => {
    return { type: constants.LOAD_LOCATION_NAME_SUGGESTION_FAIL };
};

export const fetchSuggestion = (name) => {
    return (dispatch) =>
        axios.get(getLocationWeatherUrlByName(name))
            .then(({data}) => {
                const location = R.path(
                    ['query', 'results', 'channel', 'location'], data);
                if (location) {
                    const { city, region, country } = location;
                    const name = `${city},${region} - ${country}`;
                    return dispatch(fetchLocationNameSuccess(name));
                }
                fetchLocationNameFail();
            })
            .catch(() => dispatch(fetchLocationNameFail()));
};
