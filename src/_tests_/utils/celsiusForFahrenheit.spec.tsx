import { celsiusForFahrenheit } from '../../utils/celsiusForFahrenheit';

describe('Unit tests of the celsius for fahrenheit function ', () => {
    it('should be showing the conversion value from celsius to fahrenheit', () => {
        expect(celsiusForFahrenheit(11)).toBe(52);
    });
});
