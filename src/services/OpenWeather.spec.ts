import { OpenWeather, OpenWeatherCoord, OpenWeatherForecast, OpenWeatherGeo } from './OpenWeather'
import { api } from './api'


jest.mock('./api')

const city = 'Rio Grande'
const lat = 12234
const lon = 1279
const apiID = process.env.OPEN_WEATHER_API_KEY

describe("OpenWeatherAPI", () => {
    it('should make the call to openWeather', async () => {
        await OpenWeather(city)
        expect(api.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}&units=metric&lang=pt_br`)
    })

    it('should make the call to openWeatherForecast', async () => {
        await OpenWeatherForecast(lat, lon)
        expect(api.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiID}&units=metric&lang=pt_br`)
    })

    it('should make the call to OpenWeatherGeo', async () => {
        await OpenWeatherGeo(city)
        expect(api.get).toHaveBeenCalledWith(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiID}&units=metric&lang=pt_br`)
    })

    it('should make the call to OpenWeatherCoord', async () => {
        await OpenWeatherCoord(lat, lon)
        expect(api.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}&units=metric&lang=pt_br`)
    })
})