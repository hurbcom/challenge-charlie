import { Temperature } from "./temperature";

describe('Temperature', () => {
  const testCases = [
    { celsius: 0, fahrenheit: 32 },
    { celsius: 10, fahrenheit: 50 },
    { celsius: 25, fahrenheit: 77 },
    { celsius: 100, fahrenheit: 212 }
  ];

  testCases.forEach(testCase => {
    it(`should convert celsius ${testCase.celsius} to fahrenheit ${testCase.fahrenheit}`, () => {
      const temperature = new Temperature(testCase.celsius);

      expect(temperature.fahrenheit).toBe(testCase.fahrenheit);
    });
    
    it(`should convert fahrenheit ${testCase.fahrenheit} to celsius ${testCase.celsius}`, () => {
      const temperature = new Temperature();
      temperature.fahrenheit = testCase.fahrenheit;

      expect(temperature.celsius).toBe(testCase.celsius);
    });
  });

  it('should return celsius unit', () => {
    const temperature = new Temperature(testCases[0].celsius);
    expect(temperature.selectedUnitValue).toBe(temperature.celsius);
  });

  it('should return fahrenheit unit', () => {
    const temperature = new Temperature(testCases[0].celsius);
    temperature.changeUnit();
    expect(temperature.selectedUnitValue).toBe(temperature.fahrenheit);
  });

  it ('should return formatted temperature', () => {
    const temperature = new Temperature(testCases[0].celsius);
    expect(temperature.toString()).toBe("0ºC");
  });
});