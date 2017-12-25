import * as constants from '../constants';

const backgroundReducer = (state = '', action) => {
    switch (action.type) {
        case constants.LOAD_BACKGROUND_SUCCESS:
            return action.backgroundUrl;
        default:
            return state;
    }
};

export default backgroundReducer;
