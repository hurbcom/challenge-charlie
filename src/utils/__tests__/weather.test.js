import axios from "axios";
import WeatherUtils from '../weather';

describe("WeatherUtils", () => {
  it("checks conversion from kelvin to celsius ", () => {
    expect(Number(WeatherUtils.kelvinToCelsius(300).toFixed(2))).toBe(26.85);
    expect(Number(WeatherUtils.kelvinToCelsius(247.15).toFixed(2))).toBe(-26.00);
  });

  it("checks conversion from checks kelvin to celsius 1", () => {
    expect(Number(WeatherUtils.kelvinToFahrenheit(300).toFixed(2))).toBe(80.33);
    expect(Number(WeatherUtils.kelvinToFahrenheit(247.15).toFixed(2))).toBe(-14.80);
  });

  it("checks weather labels", () => {
    expect(WeatherUtils.getWeatherLabel('thunderstorm')).toBe('Tempestade');
    expect(WeatherUtils.getWeatherLabel('clear')).toBe('Ensolarado');
    expect(WeatherUtils.getWeatherLabel('drizzle')).toBe('Chuvisco');
    expect(WeatherUtils.getWeatherLabel('clouds')).toBe('Nuvens');
    expect(WeatherUtils.getWeatherLabel('snow')).toBe('Neve');
    expect(WeatherUtils.getWeatherLabel('mist')).toBe('Nevoeiro');
    expect(WeatherUtils.getWeatherLabel('rain')).toBe('Chuva');
  });
});


