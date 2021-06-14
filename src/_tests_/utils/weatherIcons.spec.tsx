import { weatherIcons } from '../../utils/weatherIcons';

describe('Unit tests of the weather icons function ', () => {
    it('should return an image url corresponding to the icon code.', () => {
        expect(weatherIcons('01d')).toBe('clear_sky.svg');
        expect(weatherIcons('02d')).toBe('few_clouds.svg');
        expect(weatherIcons('04d')).toBe('broken_clouds.svg');
        expect(weatherIcons('03d')).toBe('scattered_clouds.svg');
        expect(weatherIcons('09d')).toBe('shower_rain.svg');
        expect(weatherIcons('10d')).toBe('rain.svg');
        expect(weatherIcons('11d')).toBe('thunderstorm.svg');
        expect(weatherIcons('13d')).toBe('snow.svg');
        expect(weatherIcons('50d')).toBe('mist.svg');
        expect(weatherIcons('01n')).toBe('clear_sky.svg');
        expect(weatherIcons('02n')).toBe('few_clouds.svg');
        expect(weatherIcons('04n')).toBe('broken_clouds.svg');
        expect(weatherIcons('03n')).toBe('scattered_clouds.svg');
        expect(weatherIcons('09n')).toBe('shower_rain.svg');
        expect(weatherIcons('10n')).toBe('rain.svg');
        expect(weatherIcons('11n')).toBe('thunderstorm.svg');
        expect(weatherIcons('13n')).toBe('snow.svg');
        expect(weatherIcons('50n')).toBe('mist.svg');
    });
});
