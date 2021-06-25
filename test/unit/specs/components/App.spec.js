import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import axios from 'axios'
import flushPromises from 'flush-promises'
import App from '@/App.vue'
import MockApiBing from '../../../mocks/bing.json'
import { BING_URL } from '@/services/BingService'

describe('App.vue', () => {
  let instanciaComponente

  const STUB = sinon.stub(axios, 'get')
    .returns(Promise.resolve({
      data: MockApiBing
    }))

  beforeEach(async () => {
    instanciaComponente = mount(App, {
      stubs: ['router-view']
    })
    await flushPromises()
  })

  afterEach(() => {
    instanciaComponente.destroy()
    STUB.resetHistory()
  })

  it('Deve renderizar sem falhas', () => {
    expect(instanciaComponente.exists()).toBe(true)
    expect(instanciaComponente.html()).toMatchSnapshot()
  })

  it('Deve renderizar o background corretamente', () => {
    instanciaComponente.vm.$nextTick(() => {
      expect(STUB.calledOnce).toBe(true)
      expect(instanciaComponente.vm.urlImagemBackground).toEqual(`${BING_URL}${MockApiBing.images[0].url}`)
      expect(instanciaComponente.vm.style).toBe(`background-image: url(${instanciaComponente.vm.urlImagemBackground})`)
    })
  })
})
