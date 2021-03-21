const PROXY = "http://localhost:3005";
export const BING_IMAGE = `${PROXY}/bing-image-url`;

export const USER_LOCATION = (latitude: number, longitude: number) =>
  `${PROXY}/user-location?lat=${latitude}&lon=${longitude}`;

export const WEATHER_FORECAST = (latitude: number, longitude: number) =>
  `${PROXY}/weather-forecast?lat=${latitude}&lon=${longitude}`;

export const REVERSE_GEOCODE = (location: string) =>
  `${PROXY}/reverse-geocode?location=${location}`;
