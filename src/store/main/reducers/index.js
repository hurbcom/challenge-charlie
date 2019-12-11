export default function main(state = { unit: 'metric' }, action) {
  switch (action.type) {
    case '@background/ADD_BACKGROUND':
      const { background } = action.payload;
      return { ...state, background };
    case '@brazilStates/UPDATE_BRAZIL_STATES':
      const { brazilStates } = action.payload;
      return { ...state, brazilStates };
    case '@location/UPDATE_LOCATION':
      const { location } = action.payload;
      return { ...state, location };
    case '@unit/UPDATE_UNIT':
      const { unit } = action.payload;
      return { ...state, unit };
    case '@weather/UPDATE_WEATHER':
      const { weather } = action.payload;
      return { ...state, weather };
    default:
      return state;
  }
}
