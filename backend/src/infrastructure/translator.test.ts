import { translateWeather } from './translator'

describe('Translator', () => {
  test.each([
    ['Atmosphere', 'atmosférico'],
    ['Clear', 'limpo'],
    ['Clouds', 'nublado'],
    ['Drizzle', 'garoando'],
    ['Rain', 'chovendo'],
    ['Snow', 'nevando'],
    ['Thunderstorm', 'tempestade'],
  ])('deve traduzir corretamente o clima para português', (input, expected) => {
    const weather = translateWeather(input)
    expect(weather).toEqual(expected)
  })
})
