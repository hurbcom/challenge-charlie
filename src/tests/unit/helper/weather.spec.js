import {
    degreeToDirection,
    metersPerSecondToKilometerPerHour,
    kelvinToCelsius,
    kelvinToFahrenheit
} from '@/helper/weather';

describe('Helper functions to weather', () => {
    test('should convert meter per second in kilometers per hour', () => {
        const metersPerSecond = 10;
        const kilometersPerHour = 36;

        const result = metersPerSecondToKilometerPerHour(metersPerSecond);

        expect(result).toEqual(kilometersPerHour);
    });

    test('should convert Kelvin to Celsius', () => {
        const kelvin = 273.15;
        const celsius = parseInt(0).toFixed(1);

        const result = kelvinToCelsius(kelvin);

        expect(result).toEqual(celsius);
    });

    test('should convert Kelvin to Fahrenheit', () => {
        const kelvin = 273.15;
        const fahrenheit = parseInt(32).toFixed(1);

        const result = kelvinToFahrenheit(kelvin);

        expect(result).toEqual(fahrenheit);
    });

    test('should convert degree to direction', () => {
        let degree = 0;
        let direction = 'Norte';
        let result = degreeToDirection(degree);
        expect(result).toEqual(direction);

        degree = 180;
        direction = 'Sul';
        result = degreeToDirection(degree);
        expect(result).toEqual(direction);
    });
});