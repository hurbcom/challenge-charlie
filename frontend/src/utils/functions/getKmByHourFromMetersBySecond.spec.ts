import { getKmByHourFromMetersBySecond } from '.';

describe('Function getKmByHourFromMetersBySecond', () => {
  it('should convert meters/hour to km/h correctly', () => {
    const response = getKmByHourFromMetersBySecond(100);
    expect(response).toBe('360');
  });

  it('should round correctly', () => {
    const response = getKmByHourFromMetersBySecond(0.51);
    expect(response).toBe('1.8');
  });
});
