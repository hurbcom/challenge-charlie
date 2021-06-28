import OpenWeatherService from './OpenWeatherService'

import IconeEnsolarado from '@/components/Icones/IconeEnsolarado.vue'
import IconeChuvoso from '@/components/Icones/IconeChuvoso.vue'
import IconeNeve from '@/components/Icones/IconeNeve.vue'
import IconeNevoa from '@/components/Icones/IconeNevoa.vue'
import IconeNuvens from '@/components/Icones/IconeNuvens.vue'
import IconeNuvensDispersas from '@/components/Icones/IconeNuvensDispersas.vue'
import IconePoucasNuvens from '@/components/Icones/IconePoucasNuvens.vue'
import IconeSolChuva from '@/components/Icones/IconeSolChuva.vue'
import IconeTrovoadas from '@/components/Icones/IconeTrovoadas.vue'

export default class OpenWeatherCurrentDataService extends OpenWeatherService {
  constructor () {
    super('data/2.5/weather')
  }

  obterComponenteIcone (identificadorIconeOpenWeather) {
    /**
     * O identificador do ícone do OpenWeather são dois dígitos concatenado com uma letra que
     * identifica se é dia ou noite. Ex.: 01d ou 01n, como o sistema de ícone no momento
     * não precisa separar se é dia ou noite, removemos esse identificador e utilizamos apenas um
     * ícone para representar as duas variações do ícone
     *
     * Referência da lista de ícones da api: https://openweathermap.org/weather-conditions
     *
     * Anderson Soares Falcão: 27/07/2021
     */
    const identificadorIcone = identificadorIconeOpenWeather.replace(/\D/g, '')

    const listaIcones = {
      '01': IconeEnsolarado,
      '02': IconePoucasNuvens,
      '03': IconeNuvensDispersas,
      '04': IconeNuvens,
      '09': IconeChuvoso,
      '10': IconeSolChuva,
      '11': IconeTrovoadas,
      '13': IconeNeve,
      '50': IconeNevoa
    }

    const ehIconeValido = Object.keys(listaIcones).find(idIcone => idIcone === identificadorIcone)

    if (!ehIconeValido) {
      return IconeEnsolarado
    }

    return listaIcones[identificadorIcone]
  }

  obterDescricaoDirecaoVento (valorDirecaoEmGraus) {
    const TOTAL_PONTOS_BULSOLA = 8
    const VOLTA_EM_GRAUS = 360
    const distanciaEntrePontosCardeais = VOLTA_EM_GRAUS / TOTAL_PONTOS_BULSOLA

    const identificadoresDirecao = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO']

    let valorReferenciaSomaDistancia = distanciaEntrePontosCardeais
    let indexIdentificadorLista = 0

    while (valorReferenciaSomaDistancia < valorDirecaoEmGraus) {
      valorReferenciaSomaDistancia += distanciaEntrePontosCardeais
      indexIdentificadorLista++
    }

    return identificadoresDirecao[indexIdentificadorLista]
  }

  obterDadosEstruturados (retornoApi) {
    const {
      data: {
        main: { temp, pressure, humidity },
        wind: { speed, deg },
        weather
      }
    } = retornoApi

    return {
      temperatura: temp,
      humidade: humidity,
      pressao: pressure,
      tempo: weather[0].description,
      icone: this.obterComponenteIcone(weather[0].icon),
      vento: {
        direcao: this.obterDescricaoDirecaoVento(deg),
        velocidade: speed
      }
    }
  }

  obterDadosGeograficosPorCidade (cidade) {
    return new Promise(async (resolve, reject) => {
      try {
        const retornoApi = await this.obterDadosApi({
          q: `${cidade},BR`,
          lang: 'pt',
          units: 'imperial'
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
