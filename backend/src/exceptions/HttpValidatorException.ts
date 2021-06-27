class HttpValidatorException extends Error {
  public status: number
  public message: string

  constructor (message: object) {
    super(JSON.stringify(message))

    const errors = Object.values(message)

    this.status = 400
    this.message = errors.join(',')
  }
}

export default HttpValidatorException
