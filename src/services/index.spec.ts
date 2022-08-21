import services from '.';

describe('services', () => {
  it('should return the dynamicBackground service', () => {
    expect(services).toHaveProperty('dynamicBackground');
  });

  it('should return the geolocalization service', () => {
    expect(services).toHaveProperty('geolocalization');
  });

  it('should return the location service', () => {
    expect(services).toHaveProperty('location');
  });

  it('should return the weather service', () => {
    expect(services).toHaveProperty('weather');
  });
});
