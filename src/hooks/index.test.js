import { renderHook } from '@testing-library/react-hooks';

import { rest } from 'msw';
import { setupServer } from 'msw/node'

import useFetch from './';

const server = setupServer(
    rest.get('http://example.com', (req, res, ctx) => {
        return res(ctx.json({ results: 'test' }));
    })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('initial state is idle', () => {
    const {result} = renderHook(() => useFetch());

    expect(result.current.status).toEqual('idle');
    expect(result.current.data).toEqual([]);
});

test('should start to fecth data', () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('http://example.com'));

    expect(result.current.status).toEqual('fetching');
    expect(result.current.data).toEqual([]);
});

test('should return fecth data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('http://example.com'));

    await waitForNextUpdate();

    expect(result.current.status).toEqual('fetched');
    expect(result.current.data).toEqual({ results: 'test' });
});