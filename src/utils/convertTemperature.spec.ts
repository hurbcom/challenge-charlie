import { ToFahrenheit } from './convertTemperature';

describe('ToFahrenheit()', () => {
  it('should return number', () => {
    const celsius = 16; // celsius temperature
    const fahrenheit = 60.8; // fahrenheit temperature

    expect(fahrenheit).toEqual(ToFahrenheit(celsius));
  });
});
