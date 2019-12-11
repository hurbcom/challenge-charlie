const INITIAL_STATE = {};

export default function background(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@background/ADD_BACKGROUND':
      return { ...state, background: action.payload };
    default:
      return state;
  }
}
