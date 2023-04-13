import MockAdapter from 'axios-mock-adapter';
import { RemoteGetLocalCity } from '../../useCases/remote-get-local-city';
import { HttpStatusCode } from '@/data/http/http-client';
import axios from 'axios';
import { ForbiddenError, ServerError, UnauthorizedError, BadRequestError } from '@/domain/Errors';

describe('RemoteGetLocalCity', () => {
    let mock: MockAdapter;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    const remoteGetLocalCity = new RemoteGetLocalCity();
    const location = { location: { latitude: 10, longitude: 20 }, error: '', loading: false };

    test('should correct response', async () => {
        const data = { any_content: 'any_data' }
        mock.onGet().reply(200, data)
        const promise = await remoteGetLocalCity.get(location);
        expect(promise).toEqual(data)
    })

    test('should forbidden error', async () => {
        mock.onGet().reply(HttpStatusCode.forbidden)
        const promise = remoteGetLocalCity.get(location)
        await expect(promise).rejects.toThrowError(new ForbiddenError())
    })
    test('should UnauthorizedError error', async () => {
        mock.onGet().reply(HttpStatusCode.unauthorized)
        const promise = remoteGetLocalCity.get(location)
        await expect(promise).rejects.toThrowError(new UnauthorizedError())
    })
    test('should ServerError error', async () => {
        mock.onGet().reply(HttpStatusCode.serverError)
        const promise = remoteGetLocalCity.get(location)
        await expect(promise).rejects.toThrowError(new ServerError())
    })
    test('should BadRequest error', async () => {
        mock.onGet().reply(HttpStatusCode.badRequest)
        const promise = remoteGetLocalCity.get(location)
        await expect(promise).rejects.toThrowError(new BadRequestError())
    })
    test('should ServerError error', async () => {
        mock.onGet().reply(HttpStatusCode.serverError, 'Network Error')
        const promise = remoteGetLocalCity.get(location)
        await expect(promise).rejects.toThrowError(new ServerError('Network Error'))
    })
});