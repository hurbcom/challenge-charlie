export const CONVERTION_RATIO = 3.6

export const metersPerSecondToKilometersPerHour = (mpsValue: number) => {
  return +Number(mpsValue * CONVERTION_RATIO).toFixed(1)
}

export const degToCompass = (deg: number) => {
  const compassValue = Math.floor((deg / 22.5) + 0.5)
  const compassPositions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  return compassPositions[(compassValue % 16)]
}
