import getWindDirection from './windDirection';

test('returns the direction of wind', () => {
    const expected = {
        'N': 5.50,
        'NNE': 28,
        'NE': 50.50,
        'ENE': 73,
        'L': 95.50,
        'ESE': 118,
        'SE': 140.50,
        'SSE': 163,
        'S': 175.50,
        'SSO': 198,
        'SO': 220.50,
        'OSO': 243,
        'O': 265.50,
        'ONO': 286,
        'NO': 308.50,
        'NNO': 331
    };

    for (let [directionExpected, deg] of Object.entries(expected)) {
        let direction = getWindDirection(deg);
        expect(direction).toEqual(directionExpected);
    }
});