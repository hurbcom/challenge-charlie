export const checkColorTemperature = (temp) => {
  if (temp > 35) {
    return 'rgba(255,109,109, 0.8)';
  } else if (temp < 15) {
    return 'rgba(138,208,206, 0.8)';
  }

  return 'rgba(255,233,99, 0.8)';
}

export const checkMoodIcon = (mood) => {
  switch (mood.toLowerCase()) {
    case 'thunderstorm':
      return 'P';
    case 'drizzle':
      return 'Q';
    case 'rain':
      return 'R';
    case 'snow':
      return 'W'
    case 'clear':
      return 'B'
    case 'clouds':
      return 'Y'
    default:
      return 'N';
  }
}