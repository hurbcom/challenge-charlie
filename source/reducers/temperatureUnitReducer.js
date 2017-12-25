import * as constants from '../constants';

const changeTemperatureUnit = (state) => {
    if (state === 'celsius') {
        return 'farenheit';
    }
    return 'celsius';
};

const temperatureUnit = (state = '', action) => {
    switch (action.type) {
        case constants.CHANGE_TEMPERATURE_UNIT:
            return changeTemperatureUnit(state);
        default:
            return state;
    }
};

export default temperatureUnit;
