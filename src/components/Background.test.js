import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import Background from './Background';

import { rest } from 'msw';
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('http://localhost:5000/proxy/', (req, res, ctx) => {
        return res(ctx.json({ images: [{ url: '/test'}] }));
    })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders children', () => {
    render(<Background>Hi</Background>);

    const children = screen.getByText(/Hi/i);
    expect(children).toBeInTheDocument();
});

test('renders loading on initialize', () => {
    render(<Background />);

    const children = screen.getByText(/Loading/i);
    expect(children).toBeInTheDocument();
});

test('renders background on fetch complete', async () => {
    const { container } = render(<Background />);
    await wait(() => (
        expect(container.firstChild).toHaveStyle('background: url("https://www.bing.com/test")')
    ), {
        timeout: 50
    });
});