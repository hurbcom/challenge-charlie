import { createStore } from 'redux';

import rootReducer from './module/rootReducer';

const store = createStore(rootReducer);

export default store;
