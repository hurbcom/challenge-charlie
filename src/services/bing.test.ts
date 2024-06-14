import { fetchBingImageUrl } from './bing';
import { MonitoringTool } from './monitoring';

class MockMonitoringTool implements MonitoringTool {
  captureAndLogException = jest.fn();
}

global.fetch = jest.fn();

describe('fetchBingImageUrl', () => {
  let mockMonitoringTool: MockMonitoringTool;

  beforeEach(() => {
    mockMonitoringTool = new MockMonitoringTool();
    (global.fetch as jest.Mock).mockReset();
  });

  it('should fetch the Bing image URL successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          images: [
            {
              startdate: '20240611',
              fullstartdate: '202406110300',
              enddate: '20240612',
              url: '/th?id=OHR.GemsbokBotswana_PT-BR8699513531_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
              urlbase: '/th?id=OHR.GemsbokBotswana_PT-BR8699513531',
              copyright: 'Órix-do-cabo na savana, Botsuana (© Karine Aigner/Tandem Stills + Motion)',
              copyrightlink: 'https://www.bing.com/search?q=%C3%93rix+do+cabo&form=hpcapt&mkt=pt-br',
              title: 'Esses antílopes são verdadeiras joias',
              quiz: '/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20240611_GemsbokBotswana%22&FORM=HPQUIZ',
              wp: true,
              hsh: 'fb2fa562fca307ad73dca16e4c7338a8',
              drk: 1,
              top: 1,
              bot: 1,
              hs: [],
            },
          ],
          tooltips: {
            loading: 'Loading...',
            previous: 'Previous image',
            next: 'Next image',
            walle: 'This image is not available to download as wallpaper.',
            walls: 'Download this image. Use of this image is restricted to wallpaper only.',
          },
        }),
    });

    const imageUrl = await fetchBingImageUrl(mockMonitoringTool);
    expect(imageUrl).toBe(
      'https://www.bing.com/th?id=OHR.GemsbokBotswana_PT-BR8699513531_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');
    expect(mockMonitoringTool.captureAndLogException).not.toHaveBeenCalled();
  });

  it('should return an empty string and capture it with the monitoring tool if the response is not ok', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const imageUrl = await fetchBingImageUrl(mockMonitoringTool);

    expect(imageUrl).toBe('');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(mockMonitoringTool.captureAndLogException).toHaveBeenCalledTimes(1);
  });
});
