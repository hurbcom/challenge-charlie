export function windDirection(angle: number) {
  const val = Math.floor(angle / 22.5 + 0.5);
  const directions = [
    "Norte",
    "NNE",
    "NE",
    "ENE",
    "Leste",
    "ESE",
    "SE",
    "SSE",
    "Sul",
    "SSO",
    "SO",
    "OSO",
    "Oeste",
    "ONO",
    "NO",
    "NNO",
  ];
  return directions[val % 16];
}
