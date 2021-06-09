import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import constants from '../../constants';
import { useReverseGeocoding } from '../useReverseGeocoding';
import { openCageGeocodingApiResponse } from '../__mocks__/openCageGeocodingApiResponse';

const axiosMock = new MockAdapter(axios);

beforeAll(() => {
  axiosMock
    .onGet(
      // eslint-disable-next-line max-len
      `${constants.OPENCAGEGEOCODING_API}geocode/v1/json?q=${constants.TEST.LAT},${constants.TEST.LON}&language=pt_br&key=${constants.OPENCAGEGEOCODING_API_ID}`,
    )
    .reply(200, openCageGeocodingApiResponse);
});

describe('useReverseGeocoding hook', () => {
  it('should return a addressInfo object', async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useReverseGeocoding({ lat: constants.TEST.LAT, lon: constants.TEST.LON }),
    );

    await waitForValueToChange(() => result.current.addressInfo);

    expect(typeof result.current.addressInfo).toBe('object');
    expect(result.current.addressInfo).toMatchObject({
      city: 'Rio de Janeiro',
      state: 'Rio de Janeiro',
      country: 'Brasil',
    });
  });
});

afterAll(() => {
  axiosMock.reset();
});
