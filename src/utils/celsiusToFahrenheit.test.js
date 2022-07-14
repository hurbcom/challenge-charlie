import celsiusToFahrenheit from "./celsiusToFahrenheit";

describe("celsiusToFahrenheit", () => {
  it("should convervet 20 Celsius to 68 Fahrenheit", () => {
    const result = celsiusToFahrenheit(20);

    expect(result).toBe(68);
  });
});
