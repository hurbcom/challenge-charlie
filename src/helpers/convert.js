const convertFahrenheitToCelsius = temp => Math.round((temp - 32) * 5 / 9);

const convertInToAtm = value => Number(value / 29.921373).toFixed(2);

const convertMphToKmh = value => Number(value * 1.609).toFixed(1);


export default {
  convertFahrenheitToCelsius,
  convertInToAtm,
  convertMphToKmh,
};
