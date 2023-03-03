import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';

interface MockAPIReqRes<T> {
  req: NextApiRequest;
  res: NextApiResponse & { _getJSONData(): T };
}

interface MockRequestResponseProps {
  method?: RequestMethod;
  query?: Partial<{ [key: string]: string | string[] }>;
}

export function mockRequestResponse<T = object>({ method = 'GET', query }: MockRequestResponseProps) {
  const { req, res }: MockAPIReqRes<T> = createMocks({
    method,
  });

  req.headers = {
    'content-type': 'application/json',
  };

  if (query) {
    req.query = query;
  }

  return { req, res };
}
