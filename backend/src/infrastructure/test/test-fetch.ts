import { StatusCodes } from 'http-status-codes'

export const createFetchResponse = (
  statusCode: StatusCodes,
  body: object = {},
) => ({
  status: statusCode,
  headers: { 'content-type': 'application/json' },
  body,
  json: () => body,
  buffer: () => Buffer.alloc(0),
})
