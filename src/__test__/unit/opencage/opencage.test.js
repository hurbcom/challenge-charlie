import { fetchData } from '../../../__mocks__/request';

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            status: {
                code: 200,
                message: 'OK'
            }
        })
    }));
})

afterAll(() => {
    global.fetch = unmockedFetch
})

describe('Fetch Data in Geocode API', () => {
    const key = 'c63386b4f77e46de817bdf94f552cddf';
    const lat = -3.7634893;
    const long = -38.4922015;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${key}`;

    let response;

    beforeEach(async () => {
        response = await fetchData(url);
    });

    it('Should return 200 when your status is 200', () => {
        expect(response.status.code).toEqual(200);
    });
});

