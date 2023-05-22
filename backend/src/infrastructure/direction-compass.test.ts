import faker from '@faker-js/faker'
import { CompassDirections, degreesToCompass } from './direction-compass'

describe('DirectionCompass', () => {
  test.each([
    [faker.datatype.number({ min: 0, max: 29 }), CompassDirections.East],
    [faker.datatype.number({ min: 30, max: 59 }), CompassDirections.NorthEast],
    [faker.datatype.number({ min: 60, max: 119 }), CompassDirections.North],
    [faker.datatype.number({ min: 120, max: 149 }), CompassDirections.NorthWest],
    [faker.datatype.number({ min: 150, max: 209 }), CompassDirections.West],
    [faker.datatype.number({ min: 210, max: 239 }), CompassDirections.SouthWest],
    [faker.datatype.number({ min: 240, max: 299 }), CompassDirections.South],
    [faker.datatype.number({ min: 300, max: 329 }), CompassDirections.SouthEast],
    [faker.datatype.number({ min: 330, max: 359 }), CompassDirections.East],
    [361, CompassDirections.North],
  ])('deve exibir a direção correta no compasso para o angulo fornecido', (input, expected) => {
    const direction = degreesToCompass(input)
    expect(direction).toEqual(expected)
  })
})
