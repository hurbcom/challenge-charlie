import React from 'react';
import { rest } from 'msw';
import { QueryClient, QueryClientProvider } from 'react-query';

export const handlers = [
  rest.get('*/data/2.5/onecall', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        current: { temp: 10 },
      }),
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log, // eslint-disable-line
      warn: console.warn,
      error: () => {},
    },
  });

export function createWrapper() {
  const testQueryClient = createTestQueryClient();

  const TestQueryClientProvider = ({ children }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );

  return TestQueryClientProvider;
}
