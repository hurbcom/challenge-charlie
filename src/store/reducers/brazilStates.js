const INITIAL_STATE = {};

export default function brazilStates(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@brazilStates/UPDATE_BRAZIL_STATES':
      return { ...state, brazilStates: action.payload };
    default:
      return state;
  }
}
