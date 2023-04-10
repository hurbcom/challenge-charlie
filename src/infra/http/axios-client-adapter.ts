import { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '../../data/http/http-client'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClientAdapter implements HttpClient {
    async request(data: HttpRequest): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse
        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: data.body,
                headers: data.headers
            })
        } catch (error: any) {
            if (error.response) {
                return {
                    statusCode: error.response.status,
                    error: error.response.data?.error ?? error.response.data,
                    body: {}
                }
            } else if (error.request) {
                return {
                    statusCode: HttpStatusCode.serverError,
                    error: error.message,
                    body: {}
                }
            } else {
                return { statusCode: HttpStatusCode.serverError, body: {} }
            }
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data
        }
    }
}
