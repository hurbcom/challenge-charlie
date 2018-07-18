import { types } from '../actions';

const INITIAL_STATE = {
  bkgImg: {},
  loading: true,
  city: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_BING:
      return { ...state, bkgImg: action.payload };
    case types.FETCH_WEATHER:
      return { ...state, loading: true };
    case types.FETCH_WEATHER_COMPLETE:
      return { ...state, loading: false, city: action.payload };
    default:
      return state;
  }
}
