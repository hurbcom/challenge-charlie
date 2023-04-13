import MockAdapter from 'axios-mock-adapter';
import { RemoteGetWeather } from "@/useCases/remote-get-weather";
import axios from "axios";
import { HttpStatusCode } from '@/data/http/http-client';
import { ForbiddenError, ServerError } from '@/domain/Errors';

describe('remote get weather', () => {
    const client = new RemoteGetWeather()
    const data = {
        results: [
            {
                geometry: {
                    lat: 0,
                    long: 0
                }
            }
        ]
    }
    let mock: MockAdapter;

    beforeAll(() => {
        mock = new MockAdapter(axios)
    });
    afterEach(() => {
        mock.reset()
    });

    test('should correct data response', async () => {
        mock
            .onGet().reply(200, data) //first call
            .onGet().reply(200, data) //second call

        const promisse = await client.get('any_city')
        expect(promisse).toEqual(data)
    })
})