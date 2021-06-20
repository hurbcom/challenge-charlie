import Logger from '@libraries/Logger'
import { v4 as uuid } from 'uuid'

describe('Logger library', () => {
  it('should be able to log in info level', () => {
    const logger = new Logger(uuid())

    expect(() => logger.info('Some log')).not.toThrow(Error)
  })

  it('should be able to log in error level', () => {
    const logger = new Logger(uuid())

    expect(() => logger.error('Some log')).not.toThrow(Error)
  })
})
