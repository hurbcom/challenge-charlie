import { GetWeather } from "@/data/useCases/get-weather";
import { AxiosHttpClientAdapter } from "../infra/http/axios-client-adapter";

export class RemoteGetWeather implements GetWeather {
    async get(city: string, lat?: number, long?: number) {
        const client = new AxiosHttpClientAdapter()
        const appWeatherId = process.env.NEXT_PUBLIC_WEATHER
        const appCageId = process.env.NEXT_PUBLIC_OPEN_CAGE
        let latitude = lat
        let longitude = long
        const cityName = city.split(' ').join('%C3%')
        try {
            if (!latitude && !longitude) {
                const cityInfo = await client.request({
                    url: `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${appCageId}&pretty=1`,
                    method: 'get'
                })
                latitude = cityInfo.body.results[0].geometry.lat
                longitude = cityInfo.body.results[0].geometry.lng
            }
            const wather = await client.request({
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,alerts&appid=${appWeatherId}`,
                method: 'get'
            })
            return wather
        } catch (error) {
            return {
                statusCode: 400
            }
        }


    }
}