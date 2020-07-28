const conversionFactorFromMetersPerSecondToKmPerhour = 3.6

export default function parseWindUnits(speed) {
  return Math.round(speed / conversionFactorFromMetersPerSecondToKmPerhour).toFixed(1)
}
