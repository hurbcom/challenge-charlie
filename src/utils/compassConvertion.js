export const convertWindDeg = (deg) => {
  const val = Math.floor((deg / 22.5) + 0.5);
  const compass = ["N", "NNE", "NE", "ENE", "L", "ESE", "SE", "SSE", "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO"];

  return compass[(val % 16)];
}