export const checkColorTemperature = (temp, unit) => {
  if ((unit === 'C' && temp > 35) || (unit === 'F' && temp > 95)) {
    return 'rgba(255,109,109, 0.8)';
  } else if ((unit === 'C' && temp < 15) || (unit === 'F' && temp < 59)) {
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