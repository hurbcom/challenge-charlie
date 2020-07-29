export const convertCelsiusFahrenheit = (input, unitOrigin) => {
  if (unitOrigin === 'C') {
    return (input * 9 / 5 + 32).toFixed();
  }

  return ((input - 32) * 5 / 9).toFixed();
}