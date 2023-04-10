import { GetLocalCity } from "@/data/useCases/get-local-city";
import { LocationModel } from "@/domain/models/city";
import useLocation from "@/hooks/useLocation";
import { AxiosHttpClientAdapter } from "@/infra/http/axios-client-adapter";

export class RemoteGetLocalCity implements GetLocalCity {
    async get(location: LocationModel) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { latitude, longitude } = location.location
        const token = process.env.NEXT_PUBLIC_OPEN_CAGE
        const client = new AxiosHttpClientAdapter()
        const response = client.request({
            url: `https://api.opencagedata.com/geocode/v1/json?key=${token}&q=${latitude}%2C${longitude}&pretty=1`,
            method: 'get'
        })
        return response
    }
}