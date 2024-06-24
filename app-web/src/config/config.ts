import { IConfig } from '../interfaces/config.interface'

// Store in the conf variable the information coming from environment variables,
// making it easier to use within the code while ensuring resilience in case any issues occur.
const config: IConfig = {
    APP_NAME: process.env.APP_NAME || 'Weather Forecast - DEV',
    APP_API: process.env.APP_API || 'http://localhost:4200/api',
    NODE_ENV: process.env.NODE_ENV || 'development'
}

export default config;