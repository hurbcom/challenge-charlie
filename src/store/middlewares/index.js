import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from './reduxLogger';


export default applyMiddleware(
  ReduxThunk,
  ReduxLogger,
);
