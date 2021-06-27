import { getWindDirectionByAzimuthDegrees } from '.';

describe('Function getWindDirectionByAzimuthDegrees', () => {
  it('should return N when direction degree is 355º', () => {
    const response = getWindDirectionByAzimuthDegrees(355);
    expect(response).toBe('N');
  });

  it('should return N when direction degree is 12º', () => {
    const response = getWindDirectionByAzimuthDegrees(12);
    expect(response).toBe('N');
  });

  it('should return L when direction degree is 90º', () => {
    const response = getWindDirectionByAzimuthDegrees(90);
    expect(response).toBe('L');
  });

  it('should return SE when direction degree is 140º', () => {
    const response = getWindDirectionByAzimuthDegrees(140);
    expect(response).toBe('SE');
  });

  it('should return O when direction degree is 292º', () => {
    const response = getWindDirectionByAzimuthDegrees(292);
    expect(response).toBe('O');
  });

  it('should return NO when direction degree is 293º', () => {
    const response = getWindDirectionByAzimuthDegrees(293);
    expect(response).toBe('NO');
  });

  it('should not return NO when direction degree is 291º', () => {
    const response = getWindDirectionByAzimuthDegrees(291);
    expect(response === 'NO').toBeFalsy();
  });
});
