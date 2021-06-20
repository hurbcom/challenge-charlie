import winston, { format, Logform } from 'winston'
class Logger {
  private winston: winston.Logger;

  constructor (requestId: string) {
    this.winston = winston.createLogger({
      format: format.printf(log => this.formatLog(log, requestId)),
      transports: [
        new winston.transports.Console()
      ]
    })
  }

  public info (message: string): void {
    this.winston.info(message)
  }

  public error (message: string): void {
    this.winston.error(message)
  }

  private formatLog ({ message, level }: Logform.TransformableInfo, requestId: string): string {
    if (typeof message === 'string') {
      return `[${level}]:(requestId:${requestId}) ${message}`
    }

    return `[${level}]:(requestId:${requestId}) ${JSON.stringify(message)}`
  }
}

export default Logger
