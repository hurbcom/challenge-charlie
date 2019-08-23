import { createStore } from 'redux';

function reducer(state, action) {

    return [
        {
            id: '1',
            background: 'black',
            bgcolor: '',
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
    ];
    if (action.type === 'SET_BACKGROUND') {
        console.log('oi');
        return { ...state, background: action.background }
    }
}

const store = createStore(reducer);

export default store;
