
import * as constants from '../constants/suggestion';

const suggestionReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.SUGGESTION_FETCH_SUCCESS: 
            return action.suggestion
        default:
            return state;
    }
};

export default suggestionReducer;