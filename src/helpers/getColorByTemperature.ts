import Color from 'color';

export const getColorByTemperature = (temperature: number | undefined) => {
  const fallbackHexadecimal: Color = Color.rgb([74, 74, 74]);

  if (!temperature) {
    return fallbackHexadecimal;
  }

  if (temperature < 15) {
    return Color.rgb([109, 157, 197]);
  }

  if (temperature > 35) {
    return Color.rgb([231, 111, 81]);
  }

  return Color.rgb([255, 200, 54]);
};
