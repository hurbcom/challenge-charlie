class UserPosition {
  public static getUserPosition = (
    sucessCallback: (geoPos: {
      coords: { latitude: number; longitude: number }
    }) => void,
    errorCallback: (error: { code: number; message: string }) => void
  ) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback)
    } else {
      errorCallback({
        code: -1,
        message: 'Não foi possível obter sua localização.',
      })
    }
  }
}

export default UserPosition
