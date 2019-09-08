// Import Middleware e Redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import InitialState
import { initialState } from './store';

// Import Tipos de Actions
import { actionTypes } from './actions';

// Reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOCATION:
      return Object.assign({}, state, {
        user_location: true,
        user_state: action.user_state,
        user_city: action.user_city,
        background: action.background,
        climate: action.climate, 
      })
    case actionTypes.USER_AUTHORIZATION:
      return Object.assign({}, state, {
        user_authorization: action.user_authorization,
      })
    default:
      return state
  }
}

// Inicializa a Store
export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}