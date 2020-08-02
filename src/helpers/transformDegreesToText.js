import i18n from 'utils/i18n'

const rosePoints = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'].map(i18n)
const circleFractions = 360 / rosePoints.length

export default function transformDegreesToText(degrees) {
  const index = Math.round(degrees / circleFractions)

  return rosePoints[index] || 'N'
}
