function ConvertToDirection(degree: number) {
  var directions = ["N", "NE", "L", "SE", "S", "SO", "O", "NO"];
  var index =
    Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;
  return directions[index];
}

export default ConvertToDirection;
