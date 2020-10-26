export const degToCompass = (degrees: number) => {
  const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const val = Math.floor(degrees / 22.5 + 0.5);
  return arr[val % 16];
};
