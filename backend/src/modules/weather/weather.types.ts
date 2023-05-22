export enum DayTypes {
  Today = 'hoje',
  Tomorrow = 'amanhã',
  AfterTomorrow = 'depois de amanhã',
}

export interface Weather {
  day: DayTypes,
  description: string,
  icon: string,
  temperature: number,
  humidity: number,
  pressure: number,
  windSpeed: string,
  windDirection: string,
  date: string,
}

export interface Location {
  city: string,
  state: string,
  country: string,
  longitude: number,
  latitude: number,
}

export interface LocationRequest {
  longitude: number,
  latitude: number,
}

export interface WeatherRequest {
  city: string,
}
