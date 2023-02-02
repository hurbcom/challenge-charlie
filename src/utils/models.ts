export type WeatherInformation = {
  day: string;
  temperature: string;
  description: string;
  wind: string;
  humidity: string;
  pressure: string;
  icon: string;
};

export type UserLocation = {
  state: string;
  city: string;
};

export type UserCoordinates = {
  latitude: number;
  longitude: number;
};
