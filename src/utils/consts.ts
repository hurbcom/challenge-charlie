export const INITAL_STATE = {
  LOCATION_STATE : {
    results: []
  },
  CURRENT_WEATHER: {
    wind: {
      speed: 0,
      deg: 0,
    },
    weather: [
      {
        main: '',
        description: '',
        icon: 0,
      }
    ],
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
    }
  },
  FORECAST: {
    list: []
  },
  BING: 'https://www.bing.com/th?id=OHR.SessileOaks_PT-BR4247012653_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
}