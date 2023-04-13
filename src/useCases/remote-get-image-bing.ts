import { GetImageBing } from "../data/useCases/get-image-bing";
import { AxiosHttpClientAdapter } from "../infra/http/axios-client-adapter";

export class RemoteGetImageBing implements GetImageBing {
    async get() {
        const client = new AxiosHttpClientAdapter()
        const response = await client.request({
            url:'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
            method: 'get'
        })
        return response
    }
}