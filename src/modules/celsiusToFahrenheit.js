export function celsiusToFahrenheit(celsius) {
  return round((celsius * 9) / 5 + 32);
}

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
