import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import axios from 'axios'
import flushPromises from 'flush-promises'
import Localidade from '@/components/Previsao/Localidade/Localidade.vue'
import IconeEnsolarado from '@/components/Icones/IconeEnsolarado.vue'
import state from '@/state/state'
import OpenWeatherCurrentDataService from '@/services/OpenWeatherCurrentDataService'
import MockApiOpenCage from '../../../mocks/openCageData.json'
import MockApiWeatherCurrentData from '../../../mocks/openWeather.json'

describe('Localidade.vue', () => {
  let instanciaComponente

  beforeEach(() => {
    instanciaComponente = mount(Localidade)
  })

  afterEach(() => {
    instanciaComponente.destroy()
  })

  it('Deve renderizar sem falhas', () => {
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
  })

  it('Deve obter a localidade do usuário ao clicar no botão de obter localidade', async () => {
    const stubGeoLocation = sinon.stub().yields({
      coords: {
        latitude: 25.33,
        longitude: -34.55
      }
    })

    global.navigator.geolocation = {
      getCurrentPosition: stubGeoLocation
    }

    const stubApiOpenCage = sinon.stub(axios, 'get')
      .returns(Promise.resolve({
        data: MockApiOpenCage
      }))

    const span = instanciaComponente.find('span')
    span.trigger('click')
    await flushPromises()
    expect(stubApiOpenCage.calledOnce).toBe(true)
    expect(instanciaComponente.vm.cidadePesquisada).toBe('Ribeirão das Neves')
    stubApiOpenCage.restore()
  })


  it('Deve efetuar chamada para obter dados geográficos ao atualizar a cidade pesquisada', async () => {
    jest.useFakeTimers()
    const TEMPO_DEBOUNCE = 500

    const stubApiWeatherCurrentData = sinon.stub(axios, 'get')
      .returns(Promise.resolve({
        data: MockApiWeatherCurrentData
      }))

    await instanciaComponente.setData({
      cidadePesquisada: 'Ribeirão das Neves'
    })

    jest.advanceTimersByTime(TEMPO_DEBOUNCE)
    await instanciaComponente.vm.$nextTick()

    const {
      main: { temp, pressure, humidity },
      wind: { speed, deg },
      weather
    } = MockApiWeatherCurrentData

    expect(state.dadosGeograficos).toEqual({
      humidade: humidity,
      pressao: pressure,
      icone: IconeEnsolarado,
      temperatura: temp,
      tempo: weather[0].description,
      vento: {
        direcao: (new OpenWeatherCurrentDataService()).obterDescricaoDirecaoVento(deg),
        velocidade: speed
      }
    })

    expect(stubApiWeatherCurrentData.calledOnce).toBe(true)
  })
})
