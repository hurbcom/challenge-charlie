import Color from 'color';

export const getColorByTemp = (temp: number | undefined) => {
  // eslint-disable-next-line operator-linebreak
  const fallbackHexadecimal: Color = Color.rgb([255, 200, 54]);

  if (!temp) {
    return fallbackHexadecimal;
  }

  if (temp < 15) {
    return Color.rgb([109, 157, 197]);
  }

  if (temp > 35) {
    return Color.rgb([231, 111, 81]);
  }

  return fallbackHexadecimal;
};
