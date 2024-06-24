import { IConfig } from '../interfaces/config.interface'

// Store in the conf variable the information coming from environment variables,
// making it easier to use within the code while ensuring resilience in case any issues occur.
const config: IConfig = {
    BING_API: process.env.BING_API || 'https://www.bing.com/',
    PORT: process.env.PORT || '4200',
    NODE_ENV: process.env.NODE_ENV || 'development',
    OPEN_WEATHER_API: process.env.OPEN_WEATHER_API || 'https://api.openweathermap.org/',
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY || '772920597e4ec8f00de8d376dfb3f094',
    OPEN_CAGE_API: process.env.OPEN_CAGE_API || 'https://api.opencagedata.com',
    OPEN_CAGE_API_KEY: process.env.OPEN_CAGE_API_KEY || '8ccfe63f871f419fb15219eed662d42c'

}

export default config;