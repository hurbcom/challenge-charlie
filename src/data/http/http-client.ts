export type HttpMethod = 'post' | 'get' | 'delete' | 'put' | 'patch'

export type HttpRequest = {
    url: string
    method: HttpMethod
    body?: any
    headers?: any
}

export enum HttpStatusCode {
    ok = 200,
    created = 201,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    serverError = 500
}

export type HttpResponse<Response = any> = {
    statusCode?: HttpStatusCode
    error?: string
    body?: Response
}

export interface HttpClient<Response = any> {
    request: (data: HttpRequest) => Promise<HttpResponse<Response>>
}
