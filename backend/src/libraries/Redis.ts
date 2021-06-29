import { redisPort, redisHost } from '@configs/app'
import * as redis from 'redis'
import Logger from '@libraries/Logger'

class Redis {
  public client?: redis.RedisClient
  public logger: Logger
  public isReadyToUse: boolean;

  constructor () {
    this.client = undefined
    this.logger = new Logger('app')

    this.isReadyToUse = false

    this.connect()
  }

  public connect () {
    this.logger.info('connecting to redis server')
    try {
      this.client = redis.createClient({
        host: redisHost,
        port: redisPort,
        connect_timeout: 4000,
        max_attempts: 5
      })
      this.assignObservers()
    } catch (error) {
      this.logger.error(error)
    }
  }

  private assignObservers () {
    this.client?.on('connect', () => this.logger.info('redis connect'))
    this.client?.on('ready', () => {
      this.isReadyToUse = true
      this.logger.info('redis ready')
    })
    this.client?.on('reconnecting', () => this.logger.info('trying to reconnect with redis'))
    this.client?.on('error', (error: any) => {
      if (typeof error === 'string' &&
        error.includes('The connection is already closed')
      ) {
        this.isReadyToUse = false
      }
      this.logger.error('redis: ' + error)
    })
    this.client?.on('end', () => this.logger.info('redis end'))
  }

  public saveInRedis (key: string, data: any) {
    if (!this.isReadyToUse) {
      return
    }

    const cacheByOneHour = 3600

    data.cachedInRedis = {
      updated_at: new Date()
    }

    this.client?.setex(
      key,
      cacheByOneHour,
      JSON.stringify(data)
    )
  }
}

export default new Redis()
