import formatWord from '../../utils/formatWord';

describe('formatWord function', () => {
    test('should return an empty string when called with an empty string', () => {
        expect(formatWord('')).toBe('');
    });

    test('should replace special characters and spaces with %C3%', () => {
        expect(formatWord('São Paulo')).toBe('Sao%C3%Paulo');
        expect(formatWord('Bragança Paulista')).toBe('Braganca%C3%Paulista');
    });

    test('should normalize accented characters using NFD', () => {
        expect(formatWord('áéíóú')).toBe('aeiou');
        expect(formatWord('ÀÈÌÒÙ')).toBe('AEIOU');
    });
});