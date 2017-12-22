import * as constants from '../constants';

const locationWeatherReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.LOAD_LOCATION_WEATHER_SUCCESS:
            return action.weather;
        default:
            return state;
    }
};

export default locationWeatherReducer;
