import { LOAD_WEATHER } from 'store/constants';


const initialState = null;

const weatherReducer = (state = initialState, action) => {
  const { type, value = {} } = action;
  switch (type) {
    case LOAD_WEATHER:
      return value.weather;
    default:
      return state;
  }
};


export default weatherReducer;
