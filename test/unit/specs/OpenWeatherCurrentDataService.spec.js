import sinon from 'sinon'
import axios from 'axios'
import OpenWeatherCurrentDataService from '@/services/OpenWeatherCurrentDataService'
import MockApiOpenWeather from '../../mocks/openWeather.json'

const STUB = sinon.stub(axios, 'get')
  .returns(Promise.resolve({
    data: MockApiOpenWeather
  }))

describe('OpenWeatherCurrentDataService.js', () => {
  it('Deve obter dados geográficos por nome da cidade', async () => {
    const cidade = 'Ribeirão das Neves'
    const dadosGeograficos = await (new OpenWeatherCurrentDataService()).obterDadosGeograficosPorCidade(cidade)
    const {
      main: { temp, pressure, humidity },
      wind: { speed, deg }
    } = MockApiOpenWeather

    expect(STUB.calledOnce).toBe(true)
    expect(dadosGeograficos).toEqual({
      humidade: humidity,
      pressao: pressure,
      temperatura: temp,
      vento: {
        direcao: deg,
        velocidade: speed
      }
    })
  })
})
