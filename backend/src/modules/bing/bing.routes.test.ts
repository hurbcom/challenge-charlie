import { StatusCodes } from 'http-status-codes'
import fetch from 'node-fetch'
import createContent from '../../infrastructure/create-content'
import messages from '../../infrastructure/messages'
import { createFetchResponse } from '../../infrastructure/test/test-fetch'
import { request } from '../../infrastructure/test/test-server'

jest.mock('node-fetch', () => jest.fn())

const baseUrl = '/api/v1/bing/'
const mockedFetch: jest.Mock = (fetch as jest.Mock)

describe('Bing', () => {
  afterEach(() => mockedFetch.mockClear())

  test('deve retornar status Ok com o tipo de conteúdo image/jpeg após obter o link', async () => {
    mockedFetch.mockResolvedValue(createFetchResponse(StatusCodes.OK, { images: [{ url: '/foo.jpg' }] }))

    const { statusCode, headers } = await request.get(baseUrl)

    expect(statusCode).toBe(StatusCodes.OK)
    expect(headers['content-type']).toBe('image/jpeg')
    expect(mockedFetch).toHaveBeenCalledWith('https://www.bing.com/foo.jpg')
  })

  test('deve retornar status BadGateway com a mensagem de erro', async () => {
    const expected = createContent(StatusCodes.BAD_GATEWAY, {}, messages.unknownError)
    mockedFetch.mockRejectedValueOnce(createFetchResponse(StatusCodes.BAD_REQUEST))

    const { statusCode, body } = await request.get(baseUrl)

    expect(statusCode).toBe(StatusCodes.BAD_GATEWAY)
    expect(body).toStrictEqual(expected)
  })
})
