import { getCelciusColor } from './get-celcius-color'

test('should return blue when temperature is lower or equal 15 celcius', () => {
    // arrange
    const expectedColor = 'rgb(0, 0, 255)'
    const temp = Math.random() * 15

    // act
    const color = getCelciusColor(temp)

    // assert
    expect(color).toBe(expectedColor)
})

test('should return red when temperature is greater or equal 35 celcius', () => {
    // arrange
    const expectedColor = 'rgb(255, 0, 0)'
    const temp = (Math.random() * 100) + 35

    // act
    const color = getCelciusColor(temp)

    // assert
    expect(color).toBe(expectedColor)
})

test('should return yellow when temperature is between 15 and 35 celcius ', () => {
    // arrange
    const expectedColor = 'rgb(255, 255, 0)'
    const temp = (Math.random() * 35) + 15

    // act
    const color = getCelciusColor(temp)

    // assert
    expect(color).toBe(expectedColor)
})