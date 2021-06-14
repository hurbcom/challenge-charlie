import { backgroundColor } from '../../utils/backgroundColor';

describe('Unit tests of the background color function ', () => {
    it('should be color gradient in blue tones if temperature less than or equal to 15', () => {
        expect(backgroundColor(-5)).toBe(
            'linear-gradient( 183.5deg, rgba(42, 227, 245, 0.7) 18.6%,  rgba(12, 42, 212, 0.9)  119.9% )',
        );
    });
    it('should be color gradient in red tones if temperature less than or equal to 35', () => {
        expect(backgroundColor(92)).toBe(
            'linear-gradient( 183.5deg,  rgba(255,101,80,0.7) 18.6%, rgba(255, 0, 0, 0.9) 119.9% )',
        );
    });
    it('should be color gradient in yellow tones for others temperatures', () => {
        expect(backgroundColor(27)).toBe(
            'linear-gradient( 183.5deg, rgba(229,251,31,0.7) 18.6%, rgba(244,173,6,1) 119.9% )',
        );
    });
});
