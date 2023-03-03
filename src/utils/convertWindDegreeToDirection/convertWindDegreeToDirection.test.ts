import { convertWindDegreeToDirection } from '.';

describe('utils - convertWindDegreeToDirection', () => {
  it('should return the cardinal directions', () => {
    expect(convertWindDegreeToDirection(0)).toBe('N');
    expect(convertWindDegreeToDirection(90)).toBe('E');
    expect(convertWindDegreeToDirection(180)).toBe('S');
    expect(convertWindDegreeToDirection(270)).toBe('W');
    expect(convertWindDegreeToDirection(360)).toBe('N');
  });

  it('should return the intercardinal directions', () => {
    expect(convertWindDegreeToDirection(45)).toBe('NE');
    expect(convertWindDegreeToDirection(135)).toBe('SE');
    expect(convertWindDegreeToDirection(225)).toBe('SW');
    expect(convertWindDegreeToDirection(315)).toBe('NW');
  });

  it('should return the secondary-intercardinal directions', () => {
    expect(convertWindDegreeToDirection(22.5)).toBe('NNE');
    expect(convertWindDegreeToDirection(67.5)).toBe('ENE');
    expect(convertWindDegreeToDirection(112.5)).toBe('ESE');
    expect(convertWindDegreeToDirection(157.5)).toBe('SSE');
    expect(convertWindDegreeToDirection(202.5)).toBe('SSW');
    expect(convertWindDegreeToDirection(247.5)).toBe('WSW');
    expect(convertWindDegreeToDirection(292.5)).toBe('WNW');
    expect(convertWindDegreeToDirection(337.5)).toBe('NNW');
  });

  it('should works over 360 degrees', () => {
    expect(convertWindDegreeToDirection(720)).toBe('N');
    expect(convertWindDegreeToDirection(540)).toBe('S');
  });
});
