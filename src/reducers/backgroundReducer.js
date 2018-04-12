const initialState = {
  background: '',
};

export default function background(state = initialState, action) {
  switch (action.type) {
    case 'BACKGROUND_FETCHED':
      return { ...state, background: action.payload };
    default:
      return state;
  }
}
