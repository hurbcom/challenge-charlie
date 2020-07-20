import {
  FETCH_WEATHER,
  FETCH_WEATHER_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  today: null,
  tomorrow: null,
  after: null,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_WEATHER:
      return { ...state, ...action.payload };
    case FETCH_WEATHER_FAIL:
        return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};
