import { Request } from 'express'

export function getRedisKey (req: Request) {
  const queryParamsAsString: string = String(Object.values(req.query)?.join(','))

  const pathString = req.path.split('/').join('-')

  const key = 'cache' + pathString + queryParamsAsString

  return key
}
