const convertFahrenheitToCelsius = temp => Math.round((temp - 32) * 5 / 9);

const convertMphToKmh = value => Math.round(value * 1.609);


export default {
  convertFahrenheitToCelsius,
  convertMphToKmh,
};
