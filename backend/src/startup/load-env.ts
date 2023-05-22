import dotenv from 'dotenv'
import logger from '../infrastructure/logger'

export default async () => {
  if (process.env.NODE_ENV === 'production') return

  const path = process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
  logger.info(`Loading ${path} file from directory`)
  const result = await dotenv.config({ path })
  if (result.error) {
    logger.error(`(${process.env.NODE_ENV}) Error loading ${path} file from directory`, result.error)
    throw result.error
  }
}
