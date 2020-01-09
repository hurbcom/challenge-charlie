
import OpenWeather from '../utils/OpenWeather.util';

it('fixes temperatures', () => {
  expect(OpenWeather.tempFix(25.2525, 'metric')).toStrictEqual(['25.3', 'ºC']);
  expect(OpenWeather.tempFix(25, 'imperial')).toStrictEqual(['25.0', 'ºF'])
});

it('fixes wind speeds', () => {
  expect(OpenWeather.windFix(25, 'metric')).toStrictEqual(['90.0', 'Km/h']);
  expect(OpenWeather.windFix(25, 'imperial')).toStrictEqual(['25.0', 'mph']);
});

it('converts degrees to cardinal', () => {
  expect(OpenWeather.degToCardinal(0)).toBe('N');
  expect(OpenWeather.degToCardinal(90)).toBe('E');
  expect(OpenWeather.degToCardinal(180)).toBe('S');
  expect(OpenWeather.degToCardinal(270)).toBe('O');
});