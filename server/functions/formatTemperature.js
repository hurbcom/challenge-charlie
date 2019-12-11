export function tempToCelsius(temp, unit) {
  if (unit === 'imperial') {
    return ((temp - 32) * 5) / 9;
  }
  return temp;
}

export function formatTemp(temp, unit) {
  if (unit === 'imperial') {
    return `${Math.round(temp, 1)}ºF`;
  }
  return `${Math.round(temp, 1)}ºC`;
}
