import { httpService } from '../../src/services/_http';
import { getCoverImage } from '../../src/services/bing';

describe('Bing Service', () => {
  describe('getCoverImage', () => {
    const url = `${process.env.BYPASS_CORS_URL}${process.env.MICROSOFT_BING_URL}${process.env.MICROSOFT_BING_IMAGE_ARCHIVE_URL}`;

    test('should call http service with correct params', async () => {
      const spay = jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => Promise.resolve(null));

      await getCoverImage();

      expect(spay).toBeCalledWith(url);
    });

    test('should return mapped api result', async () => {
      jest.spyOn(httpService, 'get').mockImplementationOnce(() =>
        Promise.resolve({
          images: [
            {
              title: 'any title',
              url: 'bing.url',
              copyright: '',
            },
          ],
        })
      );

      const result = await getCoverImage();

      expect(result).toEqual({
        title: 'any title',
        url: `${process.env.MICROSOFT_BING_URL}bing.url`,
        copyright: '',
      });
    });
  });
});
