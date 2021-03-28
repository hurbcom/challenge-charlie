const PROXY = "http://localhost:3005";
export const BING_IMAGE = `${PROXY}/bing-image-url`;

export const WEATHER_FORECAST = (
  latitude: number,
  longitude: number,
  system: string
) =>
  `${PROXY}/weather-forecast?lat=${latitude}&lon=${longitude}&system=${system}`;

export const FORWARD_GEOCODE = (location: string) =>
  `${PROXY}/forward-geocode?location=${location}`;

export const REVERSE_GEOCODE = (latitude: number, longitude: number) =>
  `${PROXY}/reverse-geocode?lat=${latitude}&lon=${longitude}`;
