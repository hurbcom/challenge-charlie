export interface WeatherResponse {
    dt: number
    main: {
        temp: number
        pressure: number
        humidity: number
    }
    weather: {
        id: number
        main: string
        description: string
        icon: string
    }[]
    wind: {
        speed: number
        deg: number
    }
    dt_txt: string
}

export interface GetForecastResponse {
    list: WeatherResponse[]
}

export type WeatherName =
    | 'Thunderstorm'
    | 'Drizzle'
    | 'Rain'
    | 'Snow'
    | 'Mist'
    | 'Smoke'
    | 'Haze'
    | 'Dust'
    | 'Fog'
    | 'Sand'
    | 'Ash'
    | 'Squall'
    | 'Tornado'
    | 'Clear'
    | 'Clouds'

export interface WeatherState {
    temp: number
    description: string
    name: WeatherName
    pressure: number
    humidity: number
    wind: number
    windDirection: string
}
