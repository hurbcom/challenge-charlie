const compassDirections = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N',
];

function convertDegreesToCompass(degrees: number) {
  // formula reference: https://www.campbellsci.com.br/blog/convert-wind-directions
  const index = Math.round((degrees % 360) / 22.5);

  return compassDirections[index];
}

export const handleWindLabel = (speed: number, degrees: number) => {
  const direction = convertDegreesToCompass(degrees);
  const speedInkilometers = speed * 3.6;

  return `${direction} ${speedInkilometers.toFixed(1)}km/h`;
};
