import * as constants from '../constants/image';

const imageReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.IMAGE_FETCH_SUCCESS: 
            return action.image
        default:
            return state;
    }
};

export default imageReducer;