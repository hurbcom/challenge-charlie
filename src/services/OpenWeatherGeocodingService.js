import OpenWeatherService from './OpenWeatherService'

export default class OpenWeatherGeocodingService extends OpenWeatherService {
  constructor () {
    super('geo/1.0/direct')
    this.TOTAL_REGISTRO_POR_PESQUISA = 3
  }

  adicionarCoutryCodeBrasilPesquisa (nomeCidade) {
    return `${nomeCidade},BR`
  }

  pesquisarLocalidadePorCidade (nomeCidade) {
    return new Promise(async (resolve, reject) => {
      try {
        const queryStringPesquisa =
          this.adicionarCoutryCodeBrasilPesquisa(nomeCidade)

        const { data } = await this.obterDadosApi({
          q: queryStringPesquisa,
          limit: this.TOTAL_REGISTRO_POR_PESQUISA
        })

        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }
}
