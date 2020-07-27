import {
  FETCH_LOCATION,
  FETCH_LOCATION_FAIL
} from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_LOCATION:
      return { ...state, ...action.payload };
    case FETCH_LOCATION_FAIL:
        return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};
