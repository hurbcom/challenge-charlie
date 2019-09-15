import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tim: null,
    endOfLoading: true,
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEATHER:
            return {
                ...state,
                tim: action.tim
            }
        case actionTypes.FINISH_LOADING:
            return {
                ...state,
                endOfLoading: true,
            }
        default:
            return state;
    }
};

export default reducer;