export interface ILocationName {
  city?: string;
  country: string;
  formatted: string;
  state?: string;
}

export interface IWeatherIcon {
  sunset: number;
  weatherId: number;
}

export interface IWeatherColor {
  day: string;
  tempToday: number;
}
