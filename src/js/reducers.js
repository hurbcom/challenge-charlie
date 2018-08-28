import initialState from './initialState'
import * as types from './actions/actionTypes'



const reducers = (state = initialState, action) => {

    switch (action.type) {
      
        
        case types.GET_WEATHER:

            console.log(action.payload.item.forecast);
            return Object.assign({}, state, {
                findLocation:true,
                weather: {
                    city: `${action.payload.location.city}/${action.payload.location.region}`,
                    condition: action.payload.item.condition,
                    wind:action.payload.item.wind,
                    atmosphere:action.payload.item.wind,
                    forecast:{
                        amanha:action.payload.item.forecast[0],
                        depoisAmanha:action.payload.item.forecast[1]
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
        case types.IS_SEARCHING:
            return Object.assign({}, state, {
                isSearching:true
            })
        case types.NOT_SEARCHING:
            return Object.assign({}, state, {
                isSearching:false
            })
        case types.CHANGE_DEG:
            return Object.assign({}, state, {
                mainDeg:!state.mainDeg
            })
        default:
            return state
    }
}

export default reducers