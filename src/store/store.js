import { createStore } from 'redux';

function reducer() {
    return [
        {
            id: '1',
            background: '',
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
}

const store = createStore(reducer);

export default store;
