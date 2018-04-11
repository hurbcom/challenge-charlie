const initialState = {
  loading: true,
  infosLocation: '',
  info: {
    wind: {},
    atmosphere: {},
    item: {
      condition: {},
      forecast: {},
    },
  },
  outherWeather: {
    0: {},
    1: {},
    2: {},
  },
};

export default function getLocation(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_LOCATION_BY_POSITION':
      return {
        ...state,
        loading: false,
        info: action.payload.query.results.channel,
        outherWeather: action.payload.query.results.channel.item.forecast,
        infosLocation: action.payload.query.results.channel.location,
      };
    default:
      return state;
  }
}
