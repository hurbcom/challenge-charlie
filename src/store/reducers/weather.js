const INITIAL_STATE = {};

export default function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@weather/UPDATE_WEATHER':
      return { ...state, weather: action.payload };
    default:
      return state;
  }
}
