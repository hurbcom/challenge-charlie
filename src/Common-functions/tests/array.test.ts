import { head, slice, tail } from '../functions/array'

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

describe('Array tail testing', () => {
  it('Should return 42', () => {
    expect(tail([42])).toEqual(42)
  })

  it('Should return 21', () => {
    expect(tail([42, 21])).toEqual(21)
  })

  it('Should return undefined', () => {
    expect(tail([])).toEqual(undefined)
  })
})

describe('Array splice testing', () => {
  const mainArray = [1, 2, 3, 4, 5]

  it('Should return the first two numbers', () => {
    expect(slice(mainArray, 0, 2)).toEqual([1, 2])
  })

  it('Should remove the last 3 items', () => {
    expect(slice(mainArray, 2, mainArray.length)).toEqual([3, 4, 5])
  })
})
