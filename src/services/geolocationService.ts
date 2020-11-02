import CacheService from './cacheService'

class Geolocation {
  public static handlePermissionSuccess = (position: any) => {
    const postionObj = {
      permission: true,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }
    CacheService.setCacheData('location', postionObj, 15, 'MINUTES')
    return postionObj
  }
  private static handlePermissionError = (error: any) => {
    const postionObj = {
      permission: false
    }
    if (error.code == error.PERMISSION_DENIED) {
      CacheService.setCacheData('location', postionObj, 15, 'MINUTES')
      return {
        error: true,
        errorCode: 1,
        reason: 'Permission denied',
        message: 'permissão ao gps negada'
      }
    }
    if (error.code == error.POSITION_UNAVAILABLE) {
      return {
        error: true,
        errorCode: 2,
        reason: 'Position unavailable',
        message:
          'nao conseguimos pegar sua localizacao, verifique as permissoes do navegador'
      }
    } else {
      return {
        error: true,
        errorCode: 4,
        reason: 'Unkow error',
        message:
          'nao conseguimos pegar sua localizacao, verifique as permissoes do navegador'
      }
    }
  }
  public static askLocation = async () => {
    const cacheData = CacheService.getCacheData('location')
    if (cacheData && cacheData.permission) return cacheData
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(Geolocation.handlePermissionSuccess(position))
          },
          (error) => {
            reject(Geolocation.handlePermissionError(error))
          },
          { maximumAge: 15000, timeout: 15000, enableHighAccuracy: true }
        )
      } else {
        reject({
          errorCode: 3,
          reason: 'Geolocation unavailable',
          message: 'serviço de gps indisponível'
        })
      }
    })
  }
}

export default Geolocation
