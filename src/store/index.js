import { createStore } from 'redux';

const initialState = [
    {
        id: '1',
        background: 'black',
        bgcolor: '',
        temperatura: {
            localizacao: '',
            icone: '',
            grau: '',
            grau2: '',
            grau2max: '',
            grau3: '',
            grau3max: '',
            modo: 'F',
            vento: '',
            humidade: '',
            pressao: ''
        }
    }
]

function reducer(state = initialState, action) {
    if (action.type === 'SET_BACKGROUND') {
        return [{ ...state, background: action.url }]
    }
    return state;

}

const store = createStore(reducer);

export default store;
