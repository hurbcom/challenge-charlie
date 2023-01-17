export interface CurrentWeatherProps {
  wind: {
    speed: number
    deg: number
  }
  weather: [
    {
      main: string
      description: string
      icon: number
    }
  ]
  main: {
    temp: number
    pressure: number
    humidity: number
  }
}

export interface ForecastWeatherProps {
  list: {
    main: {
      temp: number
    }
  }[]
}

export interface LocationProps {
  results: {
    components: {
      city: string
      state?: string
      country: string

    }
    geometry: {
      lat: number
      lng: number
    }
  }[]
}