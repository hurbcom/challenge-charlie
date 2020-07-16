import { FETCH_BACKGROUND } from "../actions/types";

const INITIAL_STATE = {
  url: "#fff",
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_BACKGROUND:
			return { ...state, url: action.payload };
		default:
			return state;
	}
};
