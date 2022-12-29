import chroma from "chroma-js";

export function colorByCelsius(celsius) {
  if (celsius <= 15) {
    colorByCelsius.blue ??= chroma
      .scale(["#0039FF", "#00FFEE"])
      .domain([0, 15], celsius)
      .out("hex");
    return colorByCelsius.blue(celsius);
  } else if (celsius >= 35) {
    colorByCelsius.red ??= chroma
      .scale(["#FF5A00", "#FF0040"])
      .domain([35, 45], celsius)
      .out("hex");
    return colorByCelsius.red(celsius);
  }

  colorByCelsius.yellow ??= chroma
    .scale(["#F1FF00", "#FFD700"])
    .domain([15, 35], celsius)
    .out("hex");
  return colorByCelsius.yellow(celsius);
}
