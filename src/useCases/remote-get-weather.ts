import { GetWeather } from "@/data/useCases/get-weather";
import { AxiosHttpClientAdapter } from "../infra/http/axios-client-adapter";
import formatWord from "@/utils/formatWord";

export class RemoteGetWeather implements GetWeather {
    async get(city: string) {
        const client = new AxiosHttpClientAdapter()
        const appWeatherId = process.env.NEXT_PUBLIC_WEATHER
        const appCageId = process.env.NEXT_PUBLIC_OPEN_CAGE
        const cityName = formatWord(city)
        try {
            const cityInfo = await client.request({
                url: `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${appCageId}&pretty=1`,
                method: 'get'
            })
            const latitude = cityInfo.body.results[0].geometry.lat
            const longitude = cityInfo.body.results[0].geometry.lng
            const wather = await client.request({
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,alerts&appid=${appWeatherId}`,
                method: 'get'
            })
            return wather
        } catch (error) {
            return {
                statusCode: 500
            }
        }


    }
}