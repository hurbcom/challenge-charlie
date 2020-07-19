function degreesToDirection(degrees: number): string {
  const directions = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO', 'N'];
  const val = Math.floor(degrees / 45 + 0.5);
  return directions[val % 8];
}

function convertCelsiusToFahrenheit(degrees: number): number {
  return (degrees * 9) / 5 + 32;
}

export { degreesToDirection, convertCelsiusToFahrenheit };
