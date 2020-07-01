function getWindDirection(direction: number | undefined): string {
  if (direction) {
    if (direction > 22.5 && direction <= 67.5) {
      return 'NE';
    }
    if (direction > 67.5 && direction <= 112.5) {
      return 'E';
    }
    if (direction > 112.5 && direction <= 157.5) {
      return 'SE';
    }
    if (direction > 157.5 && direction <= 202.5) {
      return 'S';
    }
    if (direction > 202.5 && direction <= 247.5) {
      return 'SO';
    }
    if (direction > 247.5 && direction <= 292.5) {
      return 'O';
    }
    if (direction > 292.5 && direction <= 337.5) {
      return 'NO';
    }
    return 'N';
  }
  return 'N/A';
}

export default getWindDirection;
