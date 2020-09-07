import { convertCelciusToFahrenheit } from './convert-celcius-to-fahrenheit'

test('32 celcius should be 90 fahrenheit', () => {
    // arrange
    const celcius = 32
    const expectedFahrenheit = 90

    // act
    const fahrenheit = convertCelciusToFahrenheit(celcius)

    // assert
    expect(fahrenheit).toBe(expectedFahrenheit)
})