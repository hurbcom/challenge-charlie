class HttpException extends Error {
  public status
  public message

  constructor (status: number, message: string) {
    super(message)

    this.status = status || 500
    this.message = message || 'Internal Server Error'
  }
}

export default HttpException
