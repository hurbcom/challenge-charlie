export default function formatWindSpeed(speed, unit) {
  if (unit === 'metric') {
    return `${Math.round(speed * 4.194, 2)}km/h`;
  }
  return `${Math.round(speed, 2)}mi/h`;
}
