export default function transformDegreesToText(degrees) {
  const rosePoints = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']
  const circleFractions = 360 / rosePoints.length
  const index = Math.round(degrees / circleFractions)

  return rosePoints[index] || 'N'
}
