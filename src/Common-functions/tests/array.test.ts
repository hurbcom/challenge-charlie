import { head } from '../functions/array'

describe('Array head testing', () => {
  it('Should return 42', () => {
    expect(head([42])).toEqual(42)
  })

  it('Should return 21', () => {
    expect(head([42, 21])).toEqual(42)
  })

  it('Should return undefined', () => {
    expect(head([])).toEqual(undefined)
  })
})
