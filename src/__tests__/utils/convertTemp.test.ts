import fahrenheitToCelsius from '../../utils/convertTemp';

describe('fahrenheitToCelsius function', () => {
    test('should return 0 when called with 32', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });

    test('should return -17 when called with 1', () => {
        expect(fahrenheitToCelsius(1)).toBe(-17);
    });

    test('should return 10 when called with 50', () => {
        expect(fahrenheitToCelsius(50)).toBe(10);
    });

    test('should return -40 when called with -40', () => {
        expect(fahrenheitToCelsius(-40)).toBe(-40);
    });

    test('should return 21 when called with 69.8', () => {
        expect(fahrenheitToCelsius(69.8)).toBe(21);
    });
});