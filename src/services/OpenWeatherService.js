import ApiHelper from '@/helper/ApiHelper'

export default class OpenWeatherService {
  constructor (enpointApiOpenWeather) {
    this.enpointApiOpenWeather = enpointApiOpenWeather
  }

  obterUrlApiOpenWeather () {
    return `http://api.openweathermap.org/${this.enpointApiOpenWeather}`
  }

  adicionarParametroAppIdRequisicao (parametrosApi) {
    parametrosApi.appid = '7ba73e0eb8efe773ed08bfd0627f07b8'
    return parametrosApi
  }

  obterDadosApi (parametrosApi) {
    return ApiHelper.get(
      this.obterUrlApiOpenWeather(),
      this.adicionarParametroAppIdRequisicao(parametrosApi)
    )
  }
}
