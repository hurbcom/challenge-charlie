import Logger from '@libraries/Logger'
import app from './app'

const logger = new Logger('app')
logger.info('server started successfully at '.concat(String(new Date())))

app.listen(3333)
