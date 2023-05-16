interface Content {
  code: number,
  data: unknown,
  message?: string,
}

export default (code: number, payload: unknown, message?: string): Content => {
  let response: any = { code, data: payload }
  if (message) response = { ...response, message }
  return response
}
