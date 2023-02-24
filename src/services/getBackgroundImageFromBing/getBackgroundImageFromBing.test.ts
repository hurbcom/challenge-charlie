import nock from 'nock';
import getBackgroundImageFromBing from '.';

describe('services - getBackgroundImageFromBing', () => {
  it('should render correctly with url of background image from bing', async () => {
    nock('http://localhost:3001')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get('/HPImageArchive.aspx')
      .query({ format: 'js', idx: '0', n: '1', mkt: 'pt-US' })
      .reply(200, {
        images: [
          {
            url: '/th?id=OHR.RichmondParkDuck_PT-BR8787296136_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
          },
        ],
      });

    const backgroundImage = await getBackgroundImageFromBing();

    expect(backgroundImage).toEqual({
      url: 'https://bing.com/th?id=OHR.RichmondParkDuck_PT-BR8787296136_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
    });
  });
});
