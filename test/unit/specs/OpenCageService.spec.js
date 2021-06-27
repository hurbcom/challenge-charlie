import sinon from 'sinon'
import axios from 'axios'
import OpenCageService from '@/services/OpenCageService'
import MockApiOpenCage from '../../mocks/openCageData.json'

const STUB = sinon.stub(axios, 'get')
  .returns(Promise.resolve({
    data: MockApiOpenCage
  }))

describe('OpenCageService', () => {
  it('Deve retornar nome da cidade', async () => {
    const latitude = 123
    const longitudade = 456

    const cidade = await (new OpenCageService()).obterCidadePorLatitudeLongitude(latitude, longitudade)

    expect(STUB.calledOnce).toBe(true)
    expect(cidade).toEqual('Ribeirão das Neves')
  })
})
