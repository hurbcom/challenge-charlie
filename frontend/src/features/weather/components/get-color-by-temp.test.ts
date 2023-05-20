import { faker } from '@faker-js/faker'
import colors from '../../../assets/styles/colors'
import getColorByTemp from './get-color-by-temp'

const naTrio = [colors.grayLight, colors.grayMid, colors.grayDark]
const hotTrio = [colors.redLight, colors.redMid, colors.redDark]
const midTrio = [colors.yellowLight, colors.yellowMid, colors.yellowDark]
const coldTrio = [colors.blueLight, colors.blueMid, colors.blueDark]

const temperatureRanges = {
  hot: { min: 36, max: 50 },
  mid: { min: 15, max: 35 },
  cold: { min: -4, max: 14 },
}
const getRandomTemperature = (range) => faker.datatype.number(range)

describe('GetColorByTemp', () => {
  test.each([
    [undefined, naTrio],
    [getRandomTemperature(temperatureRanges.hot), hotTrio],
    [getRandomTemperature(temperatureRanges.mid), midTrio],
    [getRandomTemperature(temperatureRanges.cold), coldTrio],
  ])('deve retornar trio correto de cores de acordo com temperatura', (temperature, expected) => {
    const trio = getColorByTemp(temperature)
    expect(trio).toStrictEqual(expected)
  })
})
