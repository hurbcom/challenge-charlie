import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';

interface MockAPIReqRes<T> {
  req: NextApiRequest;
  res: NextApiResponse & { _getJSONData(): T };
}

export function mockRequestResponse<T = object>(method: RequestMethod = 'GET') {
  const { req, res }: MockAPIReqRes<T> = createMocks({
    method,
  });

  req.headers = {
    'content-type': 'application/json',
  };

  return { req, res };
}
