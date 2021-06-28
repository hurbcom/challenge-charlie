import { getClassificationTranslation } from '.';

describe('Function getClassificationTranslation', () => {
  it('should return specific classification correctly', () => {
    const expectedClassification = 'Chuva';
    const classification = 'Rain';

    const response = getClassificationTranslation(classification);

    expect(response).toBe(expectedClassification);
  });

  it('should return an empty string when classification doesn\'t exists',
    () => {
      const expectedClassification = '';
      const classification = 'HurbTop';

      const response = getClassificationTranslation(classification);

      expect(response).toBe(expectedClassification);
    });
});
