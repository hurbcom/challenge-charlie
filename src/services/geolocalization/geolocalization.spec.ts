import MockAdapter from 'axios-mock-adapter';
import client from '../../api';

import geolocalization, { API_BASE_URL } from '.';

const fixtures = {
  geolocalization: {
    response: {
      results: [
        {
          components: {
            city: '',
            continent: '',
            country: '',
            county: '',
            municipality: '',
            postcode: '',
            region: '',
            road: '',
            state: '',
            suburb: '',
          },
        },
      ],
    },
  },
};

describe('requests', () => {
  let mock: MockAdapter;
  const lat = -123;
  const lon = -123;

  describe('getDynamicBackground()', () => {
    describe(`when the GET ${API_BASE_URL} request is successful with status 200`, () => {
      beforeEach(() => {
        mock = new MockAdapter(client);

        mock.onGet(API_BASE_URL).reply(200, fixtures.geolocalization.response);
      });

      afterEach(() => {
        mock.restore();
      });

      it('should return the request response', async () => {
        const res = await geolocalization.getGeolocalization(lat, lon);

        expect(res).toEqual(fixtures.geolocalization.response);
      });
    });
  });

  it('should have API_BASE_URL equal the value', () => {
    expect(API_BASE_URL).toEqual('https://api.opencagedata.com/geocode/v1/json');
  });
});
