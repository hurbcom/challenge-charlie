import { LOAD_WEATHER, UI } from 'store/constants';


const initialState = UI.NO_DATA;

const backgroundImageReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case UI.NO_DATA:
    case UI.SHOW_WEATHER:
    case UI.UNDEFINED_WEATHER:
      return type;
    case LOAD_WEATHER:
      return UI.SHOW_WEATHER;
    default:
      return state;
  }
};


export default backgroundImageReducer;
