import sinon from 'sinon'
import axios from 'axios'
import MockApiBing from '../../mocks/bing.json'
import BingService, { BING_URL } from '@/services/BingService'
import flushPromises from 'flush-promises'

describe('BingService', () => {
  let stub
  beforeAll(() => {
    stub = sinon.stub(axios, 'get')
  })

  afterAll(() => {
    stub.restore()
  })

  it('Deve retornar url de background corretamente', async () => {
    stub.returns(Promise.resolve({
      data: MockApiBing
    }))

    let urlImagemBackground = await BingService.obterUrlImagemAleatoria()
    expect(stub.called).toBe(true)
    await flushPromises()
    expect(urlImagemBackground).toEqual(`${BING_URL}${MockApiBing.images[0].url}`)
  })

  it('Deve lançar uma excessão ao ter falha na requisição', async () => {
    const REQUISICAO_INVALIDA = 'Requisição inválida'
    stub.returns(Promise.reject(REQUISICAO_INVALIDA))
    try {
      await BingService.obterUrlImagemAleatoria()
    } catch (error) {
      expect(error).toEqual(REQUISICAO_INVALIDA)
    }
  })
})
