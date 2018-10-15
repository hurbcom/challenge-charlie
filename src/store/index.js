import { createStore } from 'redux';
import Reducers from './reducers';
import ReduxMiddlewares from './middlewares';


export default createStore(
  Reducers,
  ReduxMiddlewares,
);
