import getDirections from '../../utils/getDirections';

describe('getDirections', () => {
    it('returns the correct direction for a given angle', () => {
        expect(getDirections(0)).toBe('N');
        expect(getDirections(45)).toBe('NE');
        expect(getDirections(90)).toBe('E');
        expect(getDirections(135)).toBe('SE');
        expect(getDirections(180)).toBe('S');
        expect(getDirections(225)).toBe('SO');
        expect(getDirections(270)).toBe('O');
        expect(getDirections(315)).toBe('NO');
    });

    it('handles negative angles correctly', () => {
        expect(getDirections(-45)).toBe('NO');
        expect(getDirections(-90)).toBe('O');
        expect(getDirections(-135)).toBe('SO');
        expect(getDirections(-180)).toBe('S');
        expect(getDirections(-225)).toBe('SE');
        expect(getDirections(-270)).toBe('E');
        expect(getDirections(-315)).toBe('NE');
    });

    it('handles angles over 360 correctly', () => {
        expect(getDirections(360)).toBe('N');
        expect(getDirections(405)).toBe('NE');
        expect(getDirections(450)).toBe('E');
        expect(getDirections(495)).toBe('SE');
        expect(getDirections(540)).toBe('S');
        expect(getDirections(585)).toBe('SO');
        expect(getDirections(630)).toBe('O');
        expect(getDirections(675)).toBe('NO');
    });
});