export const INITIAL_STATE = {
  LOCATION_STATE : {
    results: []
  },
  CURRENT_WEATHER: [{
    data: {
      main: {
        feels_like: 0,
        temp: 0,
        pressure: 0,
        humidity: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
      },
      weather: [
        {
          description: '',
        }
      ],
    },
  },
  {
    data: {
      list: [{
        main: {
          feels_like: 0,
        },
      }, {
        main: {
          feels_like: 0,
        },
      }]
    }
  }],
  FORECAST: {
    list: []
  }
}
