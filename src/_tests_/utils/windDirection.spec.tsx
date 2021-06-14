import { windDirection } from '../../utils/windDirection';

describe('Unit tests of the wind direction function ', () => {
    it('should be N if wind direction is less or equal to 0', () => {
        expect(windDirection(0)).toBe('N ');
    });
    it('should be NE if wind direction is less or equal to 45', () => {
        expect(windDirection(22)).toBe('NE ');
    });
    it('should be L if wind direction is less or equal to 95', () => {
        expect(windDirection(92)).toBe('L ');
    });
    it('should be SE if wind direction is less or equal to 135', () => {
        expect(windDirection(122)).toBe('SE ');
    });
    it('should be S if wind direction is less or equal to 180', () => {
        expect(windDirection(178)).toBe('S ');
    });
    it('should be S0 if wind direction is less or equal to 225', () => {
        expect(windDirection(220)).toBe('SO ');
    });
    it('should be O if wind direction is less or equal to 270', () => {
        expect(windDirection(269)).toBe('O ');
    });
    it('should be NO if wind direction is less or equal to 325', () => {
        expect(windDirection(325)).toBe('NO ');
    });
});
