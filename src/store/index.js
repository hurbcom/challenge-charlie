import { createStore } from 'redux';


// actions type
const SET_TODAY = "SET_TODAY";
const SET_NEXT_DAYS = "SET_NEXT_DAYS"


// Actions
function setToday(day) {
    return{
        type: SET_TODAY,
        payload: day
    }
}

function setNextDays(days) {
    return{
        type: SET_NEXT_DAYS,
        payload: days
    }
}

const initialState = {
    day: null,
    days: []
}

// Reducer
function dateReducer(prevState = initialState, action) {
    switch (action.type) {
        case SET_TODAY:
            return {
                ...prevState,
                day: action.payload
            }
        case SET_NEXT_DAYS:
            return {
                ...prevState,
                days: action.payload
            }  
        default:
            return prevState
    }
}

const store = createStore(dateReducer);
export default store;
