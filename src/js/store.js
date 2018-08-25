import {createStore,applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import initialState from './initialState'
import thunk from 'redux-thunk'

// compose para REDUX Dev Tools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

// enhancer para Redux thunk em aplicação async
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);


const store = createStore(reducers, initialState, enhancer)

export default store