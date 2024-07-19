export type RGB = {
  red: string;
  green: string;
  blue: string;
};

export type Colors = {
  yellow: RGB;
  red: RGB;
  blue: RGB;
  gray: RGB;
};

const colorsShadeDictonary: {
  [key: number]: Colors;
} = {};

colorsShadeDictonary[0] = {
  yellow: { red: "232", green: "183", blue: "20" },
  red: { red: "255", green: "105", blue: "97" },
  blue: { red: "178", green: "255", blue: "255" },
  gray: { red: "220", green: "220", blue: "220" },
};

colorsShadeDictonary[1] = {
  yellow: { red: "249", green: "202", blue: "20" },
  red: { red: "215", green: "59", blue: "62" },
  blue: { red: "173", green: "216", blue: "230" },
  gray: { red: "132", green: "132", blue: "130 " },
};

colorsShadeDictonary[2] = {
  yellow: { red: "183", green: "148", blue: "20" },
  red: { red: "230", green: "32", blue: "32" },
  blue: { red: "93", green: "138", blue: "168" },
  gray: { red: "98", green: "93", blue: "93" },
};

export default colorsShadeDictonary;
