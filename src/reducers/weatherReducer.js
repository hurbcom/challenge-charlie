
import * as constants from '../constants/weather';

const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.WEATHER_FETCH_SUCCESS: 
            return action.weather
        default:
            return state;
    }
};

export default weatherReducer;