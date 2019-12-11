const INITIAL_STATE = {};

export default function unit(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@unit/UPDATE_UNIT':
      return { ...state, unit: action.payload };
    default:
      return state;
  }
}
