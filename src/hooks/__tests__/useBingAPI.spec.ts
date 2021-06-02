import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import constants from '../../constants';
import useBingApi from '../useBingAPI';
import { bingApiResponse } from '../__mocks__/bingApiResponse';

const axiosMock = new MockAdapter(axios);

beforeAll(() => {
  axiosMock.onGet(`${constants.BING_API}HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`).reply(200, bingApiResponse);
});

describe('useBing hook', () => {
  it('should return a background image', async () => {
    const { result, waitForNextUpdate } = await renderHook(() => useBingApi());

    await waitForNextUpdate();

    expect(typeof result.current.backgroundImage).toBe('string');
    expect(result.current.backgroundImage).toBe(
      'https://www.bing.com/th?id=OHR.PoetrysCave_ROW5769564327_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
    );
  });
});

afterAll(() => {
  axiosMock.reset();
});
