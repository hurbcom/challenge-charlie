import { mockedWeatherResponse, mockedWeatherReturn } from '~/pages/api/weather/mockedData';

import { formatWeatherData } from '.';

describe('utils - formatWeatherData', () => {
  beforeEach(() => {
    jest.setSystemTime(new Date(2023, 1, 23, 0, 0, 0));
  });

  it('should return correctly with temperature number format', () => {
    const result = formatWeatherData({ data: mockedWeatherResponse.current, temperatureFormat: 'number' });

    expect(result).toStrictEqual(mockedWeatherReturn[0]);
  });

  it('should return correctly with temperature object format', () => {
    const result = formatWeatherData({
      data: mockedWeatherResponse.daily[0],
      temperatureFormat: 'object',
      daysToAdd: 1,
    });

    expect(result).toStrictEqual(mockedWeatherReturn[1]);
  });
});
