import initialState from './initialState'
import * as types from './actions/actionTypes'



const reducers = (state = initialState, action) => {
    switch(action.type){
        case types.GET_FEATURED_IMAGE:
            return Object.assign({},state,{
                urlImage:action.payload
            })
        default:
            return state
    }
}

export default reducers