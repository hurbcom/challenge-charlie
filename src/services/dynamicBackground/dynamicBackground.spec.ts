import MockAdapter from 'axios-mock-adapter';
import client from '../../api';

import dynamicBackground, { API_BASE_URL, PROXY_BASE_URL } from '.';

const fixtures = {
  dynamicBackground: {
    response: {
      contents:
        '{"images":[{"startdate":"20220821","fullstartdate":"202208210300","enddate":"20220822","url":"/th?id=OHR.CostadaMorte_PT-BR8389730302_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.CostadaMorte_PT-BR8389730302","copyright":"Farol da Playa Lago na Costa da Morte, em Mogia","title":"A Costa da Morte"}]',
    },
  },
};

// describe('requests', () => {
//   let mock: MockAdapter;

//   describe('getDynamicBackground()', () => {
//     describe(`when the GET ${API_BASE_URL} request is successful with status 200`, () => {
//       beforeEach(() => {
//         mock = new MockAdapter(client);

//         mock
//           .onGet(`${PROXY_BASE_URL}${encodeURIComponent(API_BASE_URL)}`)
//           .reply(200, fixtures.dynamicBackground.response);
//       });

//       afterEach(() => {
//         mock.restore();
//       });

//       it('should return the request response', async () => {
//         const res = await dynamicBackground.getDynamicBackground();

//         expect(res).toEqual(fixtures.dynamicBackground.response.contents);
//       });
//     });
//   });

//   it('should have PROXY_BASE_URL equal the value', () => {
//     expect(PROXY_BASE_URL).toEqual('https://api.allorigins.win/get?url=');
//   });

//   it('should have API_BASE_URL equal the value', () => {
//     expect(API_BASE_URL).toEqual(
//       'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
//     );
//   });
// });
