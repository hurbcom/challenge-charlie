import {
  FETCH_CURRENT_POSITION,
  FETCH_CURRENT_POSITION_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_CURRENT_POSITION:
      return { ...state, ...action.payload };
    case FETCH_CURRENT_POSITION_FAIL:
        return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};
