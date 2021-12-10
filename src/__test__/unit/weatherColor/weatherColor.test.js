import { getBackgroundColor } from '../../../utils';

describe('Test to measure the heat map of temperature', () => {
    const gradientBlue = ['rgba(0, 132, 247, 0.7)', 'rgba(0, 106, 199, 0.7)', 'rgba(0, 82, 153, 0.7)'];
    const gradientYellow = ['rgba(247, 225, 20, 0.7)', 'rgba(199, 180, 8, 0.7)', 'rgba(156, 140, 3, 0.7)'];
    const gradientRed = ['rgba(235, 63, 63, 0.7)', 'rgba(209, 33, 33, 0.7)', 'rgba(161, 18, 18, 0.7)'];

    const gray = 'rgba(82, 82, 82, 0.7)';

    const alternative = ['rgba(0, 132, 247, 0.7)', 'rgba(247, 225, 20, 0.7)', 'rgba(235, 63, 63, 0.7)'];

    it('Must return gradient blue when less than 15 (Metric)', () => {
        expect(getBackgroundColor('metric', [10, 10, 10])).toEqual(expect.arrayContaining(gradientBlue));
    })

    it('Must return gradient blue when less than 15 (Imperial)', () => {
        expect(getBackgroundColor('imperial', [10, 10, 10])).toEqual(expect.arrayContaining(gradientBlue));
    })

    it('Must return gradient red when greater than 35 (Metric)', () => {
        expect(getBackgroundColor('metric', [40, 36, 37])).toEqual(expect.arrayContaining(gradientRed));
    })

    it('Must return gradient yellow when > than 15 and < than 35 (Metric)', () => {
        expect(getBackgroundColor('metric', [16, 20, 30])).toEqual(expect.arrayContaining(gradientYellow));
    })

    it('Alternative colors', () => {
        expect(getBackgroundColor('metric', [10, 20, 40])).toEqual(expect.arrayContaining(alternative));
    })

    it('Must return gray when there is no temperature', () => {
        expect(getBackgroundColor(null)).toBe(gray);
    })
})