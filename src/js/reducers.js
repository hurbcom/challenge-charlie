import initialState from './initialState'
import * as types from './actions/actionTypes'



const reducers = (state = initialState, action) => {

    switch (action.type) {
      
        
        case types.GET_WEATHER:

            console.log(action.payload);
            return Object.assign({}, state, {
                findLocation:true,
                weather: {
                    city: `${action.payload.location.city}/${action.payload.location.region}`,
                    condition: action.payload.item.condition,
                    wind:action.payload.wind,
                    atmosphere:action.payload.atmosphere,
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
        case types.SEARCHING:
            return Object.assign({}, state, {
                findLocation:false
            })
        default:
            return state
    }
}

export default reducers