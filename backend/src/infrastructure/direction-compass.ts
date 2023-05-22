export enum CompassDirections {
  NorthEast = 'NE',
  North = 'N',
  NorthWest = 'NO',
  West = 'O',
  SouthWest = 'SO',
  South = 'S',
  SouthEast = 'SE',
  East = 'L',
}

export const degreesToCompass = (degree: number) => {
  if (degree >= 0 && degree < 30) return CompassDirections.East
  if (degree >= 30 && degree < 60) return CompassDirections.NorthEast
  if (degree >= 60 && degree < 120) return CompassDirections.North
  if (degree >= 120 && degree < 150) return CompassDirections.NorthWest
  if (degree >= 150 && degree < 210) return CompassDirections.West
  if (degree >= 210 && degree < 240) return CompassDirections.SouthWest
  if (degree >= 240 && degree < 300) return CompassDirections.South
  if (degree >= 300 && degree < 330) return CompassDirections.SouthEast
  if (degree >= 330 && degree <= 360) return CompassDirections.East
  return CompassDirections.North
}
