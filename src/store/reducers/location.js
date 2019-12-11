const INITIAL_STATE = {};

export default function location(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@location/UPDATE_LOCATION':
      return { ...state, location: action.payload };
    default:
      return state;
  }
}
