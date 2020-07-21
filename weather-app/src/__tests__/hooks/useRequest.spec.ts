import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';
import { useRequest } from '../../hooks/useRequest';

fetchMock.enableMocks();

const fetchData = JSON.stringify({
  ok: true,
});

describe('useRequest', () => {
  it('it should be able to do a request', async () => {
    fetchMock.mockResponse(fetchData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useRequest('https://test.com'),
    );

    await waitForNextUpdate();
    expect(result.current?.data.ok).toBe(true);
  });
});
