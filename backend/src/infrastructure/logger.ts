import winston, { transports, format } from 'winston'

export default winston.createLogger({
  level: process.env.JEST_WORKER_ID ? 'error' : 'info',
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple(),
      ),
    }),
  ],
})
