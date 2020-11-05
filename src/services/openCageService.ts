class OpenCageService {
  public static getLocationNameFromLatLong = async (
    lat: string,
    long: string,
    language = 'pt-BR'
  ) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=c63386b4f77e46de817bdf94f552cddf&language=${language}`
      )
      const results = await response.json()
      const { formatted } = results.results[0]
      return { city: formatted }
    } catch (err) {
      console.error(err)
    }
  }
  public static getLatLongFromCityName = async (
    cityName: string,
    language = 'pt-BR'
  ) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=c63386b4f77e46de817bdf94f552cddf&language=${language}`
      )
      const results = await response.json()
      if (results.results.length == 0) throw new Error('cidade não encontrada')
      const { lat, lng } = results.results[0].geometry
      const { formatted } = results.results[0]
      return { lat, long: lng, city: formatted }
    } catch (err) {
      console.error(err)
      return { message: 'Não encontramos o local pesquisado, tente novamente' }
    }
  }
}

export default OpenCageService
