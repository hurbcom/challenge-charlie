export default class LocalizacaoUsuarioService {
  existeApiGeolocationBrowserUsuario () {
    return 'geolocation' in navigator
  }

  obterLocalizacaoUsuario () {
    return new Promise((resolve, reject) => {
      try {
        if (!this.existeApiGeolocationBrowserUsuario()) {
          throw new Error('Browser não tem suporte a Geolocation API')
        }

        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          resolve({
            latitude,
            longitude
          })
        }, () => {
          reject(new Error('Sem permissão para obter a localização do usuário'))
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}
