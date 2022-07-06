export type Coordinates = {
  latitude?: number;
  longitude?: number;
};

export type Location = {
  country: string;
  state: string;
  city?: string;
  municipality?: string;
  district?: string;
};

export type BackgroundImage = {
  url: string;
  altText: string;
};

export type Forecast = {
  today: {
    temp?: number;
    humidity?: number;
    windSpeed?: number;
    windDirection?: number;
    weather: { icon: string; main?: string; description?: string };
  };
  tomorrow: {
    maxTemp?: number;
    minTemp?: number;
    weather: { icon: string; main?: string; description?: string };
  };
  afterTomorrow: {
    maxTemp?: number;
    minTemp?: number;
    weather: { icon: string; main?: string; description?: string };
  };
};
