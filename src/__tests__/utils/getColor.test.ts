import getColor from "@/utils/getColor";

describe('getColor', () => {
    test('should return correct color blue', () => {
        expect(getColor(58)).toBe('blue')
        expect(getColor(-1)).toBe('blue')
    })
    test('should return correct color red', () => {
        expect(getColor(96)).toBe('red')
        expect(getColor(105)).toBe('red')
        expect(getColor(80)).not.toBe('red')
    })
    test('should return correct color yellow', () => {
        expect(getColor(59)).toBe('yellow')
        expect(getColor(95)).toBe('yellow')
        expect(getColor(99)).not.toBe('yellow')
        expect(getColor(32)).not.toBe('yellow')
    })
})