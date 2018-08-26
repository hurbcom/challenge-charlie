import initialState from './initialState'
import * as types from './actions/actionTypes'



const reducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_WEATHER:
            return Object.assign({}, state, {
                weather: {
                    city: `${action.payload.location.city}/${action.payload.location.region}`,
                    condition: action.payload.item.condition,
                    forecast: {
                        amanha: action.payload.item.forecast[1],
                        depoisAmanha: action.payload.item.forecast[2]
                    }
                }
            })
        case types.NO_LOCATION:
        console.log(action.error);
        
            return Object.assign({}, state, {
                noLocation: true,
                weather: {
                    city: '',
                    condition: {},
                    forecast: {}
                }
            })
        default:
            return state
    }
}

export default reducers