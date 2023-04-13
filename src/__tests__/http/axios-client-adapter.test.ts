import MockAdapter from "axios-mock-adapter";
import { AxiosHttpClientAdapter } from "@/infra/http/axios-client-adapter";
import axios from "axios";

describe('axios client adapter', () => {
    const client = new AxiosHttpClientAdapter()
    let mock: MockAdapter;

    beforeAll(() => {
        mock = new MockAdapter(axios)
    });
    afterEach(() => {
        mock.reset()
    });

    test('should error', async () => {
        const data = {
            request: 'any_request',
            message: 'any_message'
        }
        mock.onGet().reply(500, data)

        const response = await client.request({
            method: 'get',
            url: 'any_url'
        })
        expect(response).toEqual({ body: {}, error: data, statusCode: 500 })
    })

    test('should request error', async () => {
        mock.onGet().passThrough()
        const response = await client.request({
            method: 'get',
            url: 'any_url'
        })
        expect(response).toEqual({ body: {}, statusCode: 500, error: "Network Error" })
    })

    test('should any error', async () => {
        mock.onGet().abortRequest()
        const response = await client.request({
            method: 'get',
            url: 'any_url'
        })
        expect(response).toEqual({ body: {}, statusCode: 500 })
    })
});