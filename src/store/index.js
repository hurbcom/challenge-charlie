import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = [
    {
        background: 'black',
        bgcolor: '',
        localizacao: '',
        icone: '',
        grau: 'aaaaaaaaaaaaaaaaaa',
        grau2: '',
        grau2max: '',
        grau3: '',
        grau3max: '',
        modo: 'F',
        vento: '',
        humidade: '',
        pressao: ''
    }
]

function reducer(state = initialState, action) {
    if (action.type === 'SET_BACKGROUND') {
        return [{ ...state, background: action.x }]
    }
    return state;

}

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
