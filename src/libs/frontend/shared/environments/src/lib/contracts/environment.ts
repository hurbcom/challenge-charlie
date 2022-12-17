export type Environment = {
    bffs: {
        weatherForecast: {
            baseUrl: string,
            endpoints: {
                locationDetails: string
                locationForecast: string
            }
        }
    },
    production: boolean
}