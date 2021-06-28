import { getIconByClassificationAndPeriod } from '.';

describe('Function getIconByClassificationAndPeriod', () => {
  it('should return a icon by classification and period correctly', () => {
    const response = getIconByClassificationAndPeriod('Clear');

    const hour = new Date().getHours();
    const isNight = hour < 6 && hour > 20;

    if (isNight) {
      expect(response).toBe('C');
    } else {
      expect(response).toBe('B');
    }
  });

  it('should return B or C when classification doesn\'t exists',
    () => {
      const response = getIconByClassificationAndPeriod('HurbTop');

      const hour = new Date().getHours();
      const isNight = hour < 6 && hour > 20;

      if (isNight) {
        expect(response).toBe('C');
      } else {
        expect(response).toBe('B');
      }
    });
});
