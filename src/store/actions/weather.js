export function updateWeather(weather) {
  return {
    type: '@weather/UPDATE_WEATHER',
    payload: { weather },
  };
}
