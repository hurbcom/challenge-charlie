import * as constants from '../constants';

const suggestionReducer = (state = null, action) => {
    switch (action.type) {
        case constants.LOAD_LOCATION_NAME_SUGGESTION_SUCCESS:
            return action.name;
        case constants.LOAD_LOCATION_NAME_SUGGESTION_FAIL:
            return null;
        default:
            return state;
    }
};

export default suggestionReducer;
