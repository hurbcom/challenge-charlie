import { convertCelsiusToFahrenheit } from '.';

describe('utils - convertCelsiusToFahrenheit', () => {
  it('should convert from Celsius to Fahrenheit ', () => {
    const result = convertCelsiusToFahrenheit(30);

    expect(result).toBe(86);
  });
});
