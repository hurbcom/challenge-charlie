import { StatusCodes } from 'http-status-codes'
import fetch from 'node-fetch'
import openGateResponseBuilder from '../../infrastructure/builders/open-gate-response.builder'
import openWeatherResponseBuilder from '../../infrastructure/builders/open-weather-response.builder'
import createContent from '../../infrastructure/create-content'
import messages from '../../infrastructure/messages'
import { createFetchResponse } from '../../infrastructure/test/test-fetch'
import { request } from '../../infrastructure/test/test-server'
import mapper from './weather.mapper'

jest.mock('node-fetch', () => jest.fn())

const baseUrl = '/api/v1/weather'
const mockedFetch: jest.Mock = (fetch as jest.Mock)

describe('Weather', () => {
  afterEach(() => mockedFetch.mockClear())

  describe('location-by-lat-lng', () => {
    test('deve retornar status Ok com a localidade da pessoa pela longitudade e latitude', async () => {
      const locationInfo = openGateResponseBuilder().create()
      const expected = createContent(StatusCodes.OK, mapper.mapLocation(locationInfo), messages.empty)
      mockedFetch.mockResolvedValueOnce(createFetchResponse(StatusCodes.OK, locationInfo))

      const { statusCode, body } = await request.get(`${baseUrl}/location-by-lat-lng?latitude=1&longitude=1`)

      expect(statusCode).toBe(StatusCodes.OK)
      expect(body).toStrictEqual(expected)
    })

    test('deve retornar status BadGateway quando houver problema para obter a localidade', async () => {
      const expected = createContent(StatusCodes.BAD_GATEWAY, {}, messages.unknownError)
      mockedFetch.mockRejectedValueOnce(createFetchResponse(StatusCodes.BAD_GATEWAY))

      const { statusCode, body } = await request.get(`${baseUrl}/location-by-lat-lng?latitude=1&longitude=1`)

      expect(statusCode).toBe(StatusCodes.BAD_GATEWAY)
      expect(body).toStrictEqual(expected)
    })

    test('deve retornar status BadRequest quando não enviar latitude e/ou longitude corretamente', async () => {
      const expected = createContent(
        StatusCodes.BAD_REQUEST,
        ['"latitude" é obrigatória', '"longitude" é obrigatório'],
        messages.invalidRequest,
      )

      const { statusCode, body } = await request.get(`${baseUrl}/location-by-lat-lng`)

      expect(statusCode).toBe(StatusCodes.BAD_REQUEST)
      expect(body).toStrictEqual(expected)
    })
  })

  describe('forecast', () => {
    test('deve retornar status Ok com a previsão do tempo de hoje e dos próximos 2 dias', async () => {
      const [weather, forecast] = openWeatherResponseBuilder().createWeatherForecast()
      const expected = createContent(
        StatusCodes.OK,
        mapper.mapWeatherAndForecast(weather, forecast),
        messages.empty,
      )
      mockedFetch
        .mockResolvedValueOnce(createFetchResponse(StatusCodes.OK, weather))
        .mockResolvedValueOnce(createFetchResponse(StatusCodes.OK, forecast))

      const { statusCode, body } = await request.get(`${baseUrl}/forecast?city=foobar`)

      expect(statusCode).toBe(StatusCodes.OK)
      expect(body).toEqual(expected)
    })

    test('deve retornar status BadGateway quando houver problema para obter a localidade', async () => {
      const expected = createContent(StatusCodes.BAD_GATEWAY, {}, messages.unknownError)
      mockedFetch.mockRejectedValueOnce(createFetchResponse(StatusCodes.BAD_GATEWAY))

      const { statusCode, body } = await request.get(`${baseUrl}/forecast?city=foobar`)

      expect(statusCode).toBe(StatusCodes.BAD_GATEWAY)
      expect(body).toStrictEqual(expected)
    })

    test('deve retornar status BadRequest quando não enviar city corretamente', async () => {
      const expected = createContent(
        StatusCodes.BAD_REQUEST,
        ['"city" é obrigatório'],
        messages.invalidRequest,
      )

      const { statusCode, body } = await request.get(`${baseUrl}/forecast`)

      expect(statusCode).toBe(StatusCodes.BAD_REQUEST)
      expect(body).toStrictEqual(expected)
    })
  })
})
