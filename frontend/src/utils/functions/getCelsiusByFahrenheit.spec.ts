import { getCelsiusByFahrenheit } from '.';

describe('Function getCelsiusByFahrenheit', () => {
  it('should convert fahrenheit to celsius correctly', () => {
    const expectedCelsius = 20;
    const fahrenheit = 68;

    const response = getCelsiusByFahrenheit(fahrenheit);

    expect(response).toBe(expectedCelsius);
  });

  it('should convert fahrenheit to celsius and round correctly', () => {
    const expectedCelsius = 38;
    const fahrenheit = 100;

    const response = getCelsiusByFahrenheit(fahrenheit);

    expect(response).toBe(expectedCelsius);
  });
});
