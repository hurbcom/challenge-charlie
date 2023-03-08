import nock from 'nock';

import getBackgroundImageFromBing from '.';

describe('services - getBackgroundImageFromBing', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('should render correctly with url of background image from bing', async () => {
    process.env.NODE_ENV = 'development';
    process.env.REACT_APP_REVERSE_PROXY_URL = 'http://localhost:3001';

    nock('http://localhost:3001')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true'
      })
      .get('/HPImageArchive.aspx')
      .query({ format: 'js', idx: '0', n: '1', mkt: 'pt-US' })
      .reply(200, {
        images: [
          {
            url: '/th?id=OHR.RichmondParkDuck_PT-BR8787296136_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
          }
        ]
      });

    const backgroundImage = await getBackgroundImageFromBing();

    expect(backgroundImage).toEqual({
      url: 'https://bing.com/th?id=OHR.RichmondParkDuck_PT-BR8787296136_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
    });
  });
});
