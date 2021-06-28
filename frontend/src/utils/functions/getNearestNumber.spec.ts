import { getNearestNumber } from '.';

describe('Function getNearestNumber', () => {
  it('should return nearest number correctly', () => {
    const value = 36;
    const valuesToCompare = [10, 20, 30, 40];
    const expectedResponseValue = 40;

    const response = getNearestNumber(value, valuesToCompare);

    expect(response).toBe(expectedResponseValue);
  });

  it('should return the first number of array when is in middle of two numbers',
    () => {
      const value = 35;
      const valuesToCompare = [10, 20, 30, 40];
      const expectedResponseValue = 30;

      const response = getNearestNumber(value, valuesToCompare);

      expect(response).toBe(expectedResponseValue);
    });

  it('should return the last number when value is greater than all ',
    () => {
      const value = 200;
      const valuesToCompare = [10, 20, 30, 40];
      const expectedResponseValue = 40;

      const response = getNearestNumber(value, valuesToCompare);

      expect(response).toBe(expectedResponseValue);
    });
});
