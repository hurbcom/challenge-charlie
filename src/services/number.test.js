import formatNumber from './number';

test('returns number with two digits', () => {
    const formatedNumber = formatNumber(3.141516, 2);
    expect(formatedNumber).toEqual('3.14');
});

test('returns number with zero digits', () => {
    const formatedNumber = formatNumber(3.141516, 0);
    expect(formatedNumber).toEqual('3');
});