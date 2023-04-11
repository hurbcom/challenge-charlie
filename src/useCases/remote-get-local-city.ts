import { HttpStatusCode } from "@/data/http/http-client";
import { GetLocalCity } from "@/data/useCases/get-local-city";
import { ForbiddenError, ServerError, UnauthorizedError } from "@/domain/Errors";
import { LocationModel } from "@/domain/models/city";
import { AxiosHttpClientAdapter } from "@/infra/http/axios-client-adapter";

export class RemoteGetLocalCity implements GetLocalCity {
    async get(location: LocationModel) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { latitude, longitude } = location.location
        const token = process.env.NEXT_PUBLIC_OPEN_CAGE
        const client = new AxiosHttpClientAdapter()
        const response = await client.request({
            url: `https://api.opencagedata.com/geocode/v1/json?key=${token}&q=${latitude}%2C${longitude}&pretty=1`,
            method: 'get'
        })
        switch (response.statusCode) {
            case HttpStatusCode.ok: return response.body
            case HttpStatusCode.unauthorized: throw new UnauthorizedError()
            case HttpStatusCode.forbidden: throw new ForbiddenError()
            default: throw new ServerError(response.error)
        }
    }
}