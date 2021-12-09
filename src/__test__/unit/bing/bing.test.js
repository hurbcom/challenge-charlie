import { fetchData } from '../../../__mocks__/request';

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            images: [{
                url: '/th?id=OHR.SalzburgKrampus_ROW5462772839_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
            }]
        })
    }));
})

afterAll(() => {
    global.fetch = unmockedFetch
})

describe('Fetch Data in Bing API', () => {
    const url = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;
    let response;

    beforeEach(async () => {
        response = await fetchData(url);
    });

    it('Should return 1 when measuring the length of the images property array', () => {
        expect(response.images).toHaveLength(1);
    });
});

