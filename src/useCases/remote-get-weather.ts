import { GetWeather } from "@/data/useCases/get-weather";
import { AxiosHttpClientAdapter } from "../infra/http/axios-client-adapter";

export class RemoteGetWeather implements GetWeather {
    async get(city: string) {

        const appId = process.env.NEXT_PUBLIC_WEATHER

        const client = new AxiosHttpClientAdapter()
        const response = await client.request({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`,
            method: 'get'
        })

        return response
    }
}