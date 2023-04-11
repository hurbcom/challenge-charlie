import { faker } from '@faker-js/faker'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { RemoteGetImageBing } from '../../useCases/remote-get-image-bing';

describe('RemoteGetImageBing', () => {
    const remoteGetImageBing = new RemoteGetImageBing();
    const mock = new MockAdapter(axios);

    test('should return image response data when called', async () => {

        const url = faker.internet.url()
        const data = { images: [{ url }] };

        mock.onGet('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR').reply(200, data);

        const response = await remoteGetImageBing.get();
        expect(response)
            .toEqual({ "body": data, "statusCode": 200 });
    });
    test('should return error', async () => {
        mock.onGet('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR').reply(403, "any_error");
        const response = await remoteGetImageBing.get();
        expect(response)
            .toEqual({ "body": {}, "statusCode": 403, "error": "any_error" });
    });
});