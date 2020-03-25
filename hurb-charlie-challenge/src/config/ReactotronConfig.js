import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

/* Configuração da ferramenta Reactotron que utulizo para auxiliar o desenvolvimento
da aplicação com redux e redux-saga */

if (process.env.NODE_ENV === 'development') {
    const tron = Reactotron.configure()
        .use(reactotronRedux())
        .use(reactotronSaga())
        .connect();

    tron.clear();

    console.tron = tron;
}
