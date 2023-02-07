import { httpService } from '../../src/services/_http';
import { findCityByCoordinates } from '../../src/services/geocode';

describe('Geocode Service', () => {
  describe('findCityByCoordinates', () => {
    const coordinates = {
      latitude: -16.612321,
      longitude: -49.2112391,
    };
    const url = `${process.env.OPEN_CAGE_API_URL}?q=${coordinates.latitude},%2B${coordinates.longitude}&key=${process.env.OPEN_CAGE_API_KEY}`;

    test('should call http service with correct params', async () => {
      const spay = jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => Promise.resolve(null));

      await findCityByCoordinates(coordinates);

      expect(spay).toBeCalledWith(url);
    });

    test('should return mapped api result', async () => {
      jest.spyOn(httpService, 'get').mockImplementationOnce(() =>
        Promise.resolve({
          results: [
            {
              components: {
                city: 'any city',
                state: 'any state',
              },
            },
          ],
        })
      );

      const result = await findCityByCoordinates(coordinates);

      expect(result).toEqual({
        city: 'any city',
        state: 'any state',
      });
    });
  });
});
