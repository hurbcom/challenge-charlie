import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import constants from '../../constants';
import { useReverseGeocoding } from '../useReverseGeocoding';
import { nominatimApiResponse } from '../__mocks__/nominatimApiResponse';

const axiosMock = new MockAdapter(axios);
const lat = -22.9068;
const lon = -43.1729;

beforeAll(() => {
  axiosMock
    .onGet(`${constants.NOMINATIM_API}reverse?format=json&lat=${lat}&lon=${lon}`)
    .reply(200, nominatimApiResponse);
});

describe('useReverseGeocoding hook', () => {
  it('should return a addressInfo object', async () => {
    const { result, waitForValueToChange } = renderHook(() => useReverseGeocoding({ lat, lon }));

    await waitForValueToChange(() => result.current.addressInfo);

    expect(typeof result.current.addressInfo).toBe('object');
    expect(result.current.addressInfo).toMatchObject({
      city: 'Rio de Janeiro',
      state: 'Rio de Janeiro',
      country: 'Brazil',
    });
  });
});

afterAll(() => {
  axiosMock.reset();
});
