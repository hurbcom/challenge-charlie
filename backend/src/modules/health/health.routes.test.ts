import { StatusCodes } from 'http-status-codes'
import createContent from '../../infrastructure/create-content'
import { request } from '../../infrastructure/test/test-server'

const baseUrl = '/api/v1/health'

describe('Health', () => {
  test('deve retornar status Ok com dados corretos', async () => {
    const expected = createContent(StatusCodes.OK, {}, 'Está tudo certo por aqui 😁')

    const { statusCode, body } = await request.get(baseUrl).expect(StatusCodes.OK).expect(expected)
    expect(statusCode).toBe(StatusCodes.OK)
    expect(body).toStrictEqual(expected)
  })
})
