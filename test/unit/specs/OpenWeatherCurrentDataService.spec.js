import sinon from 'sinon'
import axios from 'axios'
import OpenWeatherCurrentDataService from '@/services/OpenWeatherCurrentDataService'
import IconeEnsolarado from '@/components/Icones/IconeEnsolarado.vue'
import MockApiOpenWeather from '../../mocks/openWeather.json'

const STUB = sinon.stub(axios, 'get')
  .returns(Promise.resolve({
    data: MockApiOpenWeather
  }))

describe('OpenWeatherCurrentDataService.js', () => {

  const openWeatherCurrentDataService = new OpenWeatherCurrentDataService()

  it('Deve obter dados geográficos por nome da cidade', async () => {
    const cidade = 'Ribeirão das Neves'
    const dadosGeograficos = await openWeatherCurrentDataService.obterDadosGeograficosPorCidade(cidade)
    const {
      main: { temp, pressure, humidity },
      wind: { speed, deg },
      weather
    } = MockApiOpenWeather

    expect(STUB.calledOnce).toBe(true)
    expect(dadosGeograficos).toEqual({
      humidade: humidity,
      pressao: pressure,
      icone: IconeEnsolarado,
      temperatura: temp,
      tempo: weather[0].description,
      vento: {
        direcao: openWeatherCurrentDataService.obterDescricaoDirecaoVento(deg),
        velocidade: speed
      }
    })
  })

  it('Deve retornar a descrição correta da direção do vento', () => {
    const NORTE = 10
    const LESTE = 91
    const SUL = 181
    const OESTE = 271
    expect(openWeatherCurrentDataService.obterDescricaoDirecaoVento(NORTE)).toBe('N')
    expect(openWeatherCurrentDataService.obterDescricaoDirecaoVento(LESTE)).toBe('L')
    expect(openWeatherCurrentDataService.obterDescricaoDirecaoVento(SUL)).toBe('S')
    expect(openWeatherCurrentDataService.obterDescricaoDirecaoVento(OESTE)).toBe('O')
  })
})
