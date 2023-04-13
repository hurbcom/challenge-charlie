import { GetWeather } from "@/data/useCases/get-weather";
import { AxiosHttpClientAdapter } from "../infra/http/axios-client-adapter";
import formatWord from "@/utils/formatWord";
import { HttpStatusCode } from "@/data/http/http-client";
import { ForbiddenError, ServerError, UnauthorizedError } from "@/domain/Errors";

export class RemoteGetWeather implements GetWeather {
    async get(city: string) {
        const client = new AxiosHttpClientAdapter()
        const appWeatherId = process.env.NEXT_PUBLIC_WEATHER
        const appCageId = process.env.NEXT_PUBLIC_OPEN_CAGE
        const cityName = formatWord(city)
        let response;
        try {
            const cityInfo = await client.request({
                url: `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${appCageId}&pretty=1`,
                method: 'get'
            })
            const latitude = cityInfo.body.results[0].geometry.lat
            const longitude = cityInfo.body.results[0].geometry.lng
            response = await client.request({
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,alerts&lang=pt_br&units=imperial&appid=${appWeatherId}`,
                method: 'get'
            })
            response.body = {
                ...response.body,
                location: cityInfo.body.results[0].formatted
            }
        } catch (error) {
            response = {
                statusCode: 500,
                error: error
            }
        }

        switch (response.statusCode) {
            case HttpStatusCode.ok: return response.body
            default: throw new ServerError(response.error as string)
        }

    }
}