import ApiHelper from '@/helper/ApiHelper'

export default class OpenCageService {
  constructor () {
    this.endpointOpenCageGeocode = 'https://api.opencagedata.com/geocode/v1/json'
  }

  adicionarParametroKey (parametros) {
    parametros.key = '0bed4b8eac204f09b6dea7b995029a6a'
    return parametros
  }

  obterNomeCidade (retornoApi) {
    const { data: { results } } = retornoApi
    const { components: { city } } = results[0]
    return city
  }

  obterCidadePorLatitudeLongitude (latitude, longitude) {
    return new Promise(async (resolve, reject) => {
      try {
        const parametrosRequisicao = this.adicionarParametroKey({
          q: `${latitude},${longitude}`
        })

        const retornoApi = await ApiHelper.get(
          this.endpointOpenCageGeocode,
          parametrosRequisicao)

        resolve(
          this.obterNomeCidade(retornoApi)
        )
      } catch (error) {
        reject(error)
      }
    })
  }
}
