import { UI, LOAD_WEATHER } from 'store/constants';


const initialState = {};

const weatherReducer = (state = initialState, action) => {
  const { type, value = {} } = action;
  switch (type) {
    case LOAD_WEATHER:
      return value.weather;
    case UI.NO_DATA:
    case UI.UNDEFINED_WEATHER:
      return initialState;
    default:
      return state;
  }
};


export default weatherReducer;
