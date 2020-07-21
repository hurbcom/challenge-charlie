function getWeatherStatus(temperature: number): string {
  if (temperature >= 35) {
    return 'too-hot';
  }
  if (temperature >= 15) {
    return 'hot';
  }

  return 'cold';
}

export { getWeatherStatus };
