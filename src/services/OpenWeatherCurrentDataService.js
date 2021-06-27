import OpenWeatherService from './OpenWeatherService'

export default class OpenWeatherCurrentDataService extends OpenWeatherService {
  constructor () {
    super('data/2.5/weather')
  }

  obterDadosEstruturados (retornoApi) {
    const {
      data: {
        main: { temp, pressure, humidity },
        wind: { speed, deg }
      }
    } = retornoApi

    return {
      temperatura: temp,
      humidade: humidity,
      pressao: pressure,
      vento: {
        direcao: deg,
        velocidade: speed
      }
    }
  }

  obterDadosGeograficosPorCidade (cidade) {
    return new Promise(async (resolve, reject) => {
      try {
        const retornoApi = await this.obterDadosApi({
          q: cidade
        })

        resolve(
          this.obterDadosEstruturados(retornoApi)
        )
      } catch (error) {
        reject(error)
      }
    })
  }
}
