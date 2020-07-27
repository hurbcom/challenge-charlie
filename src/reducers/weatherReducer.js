import {
  FETCH_WEATHER,
  FETCH_WEATHER_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  today: null,
  tomorrow: null,
  after: null,
  error: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_WEATHER:
      return { ...action.payload, error: false };
    case FETCH_WEATHER_FAIL:
        return { ...INITIAL_STATE, error: true };
		default:
			return state;
	}
};
