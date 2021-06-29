import 'dotenv/config'

export const env = process.env.ENVIRONMENT

export const redisPort = 6379
export const redisHost = process.env.REDIS_HOST || '127.0.0.1'
