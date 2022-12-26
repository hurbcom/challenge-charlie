export type DayForecast = {
    title: string
    description: string
    temp: number
    tempSymbol: '°C' | '°F'
    wind: number
    humidity: number
    pressure: number
    icon: string
    color: string
}