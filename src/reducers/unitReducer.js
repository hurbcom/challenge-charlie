
import * as constants from '../constants/unit';

const unitReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.CHANGE_TEMPERATURE_UNIT: 
            return action.unit
        default:
            return state;
    }
};

export default unitReducer;