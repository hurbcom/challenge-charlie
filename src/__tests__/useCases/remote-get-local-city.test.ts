import MockAdapter from 'axios-mock-adapter';
import { RemoteGetLocalCity } from '../../useCases/remote-get-local-city';
import { HttpStatusCode } from '@/data/http/http-client';
import { AxiosHttpClientAdapter } from '@/infra/http/axios-client-adapter';
import axios from 'axios';
import { ForbiddenError, ServerError, UnauthorizedError } from '@/domain/Errors';

describe('RemoteGetLocalCity', () => {
    test('should return city information when request is successful', async () => {
        const mockResponse = {
            statusCode: HttpStatusCode.ok,
            body: {
                results: [{
                    components: {
                        city: 'São Paulo',
                        state: 'São Paulo',
                        country: 'Brazil',
                    },
                }],
            },
        };
        const axiosMock = new MockAdapter(axios);
        axiosMock.onGet().replyOnce(mockResponse.statusCode, mockResponse);

        const remoteGetLocalCity = new RemoteGetLocalCity();
        const location = { location: { latitude: 10, longitude: 20 }, error: '', loading: false };
        const city = await remoteGetLocalCity.get(location);
        expect(city).toEqual({
            statusCode: HttpStatusCode.ok,
            body: {
                results: [{
                    components: {
                        city: 'São Paulo',
                        state: 'São Paulo',
                        country: 'Brazil',
                    },
                }]
            },
        });
    });

    test('should throw UnauthorizedError when request returns 401', async () => {
        const mockResponse = {
            statusCode: HttpStatusCode.unauthorized,
            error: new Error('Unauthorized'),
        };
        const axiosMock = new MockAdapter(axios);
        axiosMock.onGet().replyOnce(mockResponse.statusCode);

        const remoteGetLocalCity = new RemoteGetLocalCity();
        const location = { location: { latitude: 10, longitude: 20 }, error: '', loading: false };
        const promise = remoteGetLocalCity.get(location);

        await expect(promise).rejects.toThrow(new UnauthorizedError());
    });

    test('should throw ForbiddenError when request returns 403', async () => {
        const mockResponse = {
            statusCode: HttpStatusCode.forbidden,
            error: new Error('Forbidden'),
        };
        const axiosMock = new MockAdapter(axios);
        axiosMock.onGet().replyOnce(mockResponse.statusCode);

        const remoteGetLocalCity = new RemoteGetLocalCity();
        const location = { location: { latitude: 10, longitude: 20 }, error: '', loading: false };
        const promise = remoteGetLocalCity.get(location);

        await expect(promise).rejects.toThrow(new ForbiddenError());
    });

    test('should throw ServerError when request returns 500', async () => {
        const mockResponse = {
            statusCode: HttpStatusCode.serverError,
            error: new Error('Internal Server Error'),
        };
        const axiosMock = new MockAdapter(axios);
        axiosMock.onGet().replyOnce(mockResponse.statusCode, mockResponse.error);

        const remoteGetLocalCity = new RemoteGetLocalCity();
        const location = { location: { latitude: 10, longitude: 20 }, error: '', loading: false };
        const promise = remoteGetLocalCity.get(location);

        await expect(promise).rejects.toThrow(new ServerError(mockResponse.error.message));
    });
});