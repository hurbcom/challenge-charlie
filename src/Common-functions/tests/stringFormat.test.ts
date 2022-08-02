import { capitalizeFirstLetter } from '../functions/stringFormat'

describe('String capitalize testing', () => {
  it('Should return Facebook', () => {
    expect(capitalizeFirstLetter('facebook')).toEqual('Facebook')
  })
  it('Should return Azeite de oliva', () => {
    expect(capitalizeFirstLetter('azeite de oliva')).toEqual('Azeite de oliva')
  })
})
