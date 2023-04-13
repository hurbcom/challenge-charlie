import { faker } from '@faker-js/faker'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { RemoteGetImageBing } from '../../useCases/remote-get-image-bing';
import { HttpStatusCode } from '@/data/http/http-client';

describe('RemoteGetImageBing', () => {

    const remoteGetImageBing = new RemoteGetImageBing();
    let mock: MockAdapter;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    test('should return correct response', async () => {

        const url = faker.internet.url()
        const data = { images: [{ url }] };
        mock.onGet().reply(200, data);
        const response = await remoteGetImageBing.get();
        expect(response).toEqual({ "body": data, "statusCode": 200 });

    });
    test('should return forbiden error', async () => {

        mock.onGet().reply(HttpStatusCode.forbidden, "any_error");
        const response = await remoteGetImageBing.get();
        expect(response)
            .toEqual({ "body": {}, "statusCode": 403, "error": "any_error" });
    });

    test('should return server error error', async () => {

        mock.onGet().reply(HttpStatusCode.serverError, "Network Error");
        const response = await remoteGetImageBing.get();
        expect(response)
            .toEqual({ "body": {}, "statusCode": 500, "error": "Network Error" });
    });
});