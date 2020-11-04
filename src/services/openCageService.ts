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
      console.log(results)
      const { state, city, country } = results.results[0].components
      return { state, city, country }
    } catch (err) {
      console.error(err)
    }
  }
}

export default OpenCageService
