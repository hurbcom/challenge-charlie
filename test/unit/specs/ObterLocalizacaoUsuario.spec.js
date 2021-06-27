import sinon from 'sinon'
import LocalizacaoUsuarioService from '@/services/LocalizacaoUsuarioService'

const stub = sinon.stub().yields({
  coords: {
    latitude: -45.999,
    longitude: 12.545
  }
})

global.navigator.geolocation = {
  getCurrentPosition: stub
}

describe('ObterLocalizacaoUsuarioService.js', () => {
  it('Deve retornar os dados de localizacao do usuário', async () => {
    const { latitude, longitude } = await (new LocalizacaoUsuarioService()).obterLocalizacaoUsuario()
    expect(latitude).toBe(-45.999)
    expect(longitude).toBe(12.545)
  })
})
