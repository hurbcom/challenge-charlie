/**
 * @param {string} icon
 * @returns {string}
 */
export function iconParse(icon) {
  if (icon.startsWith("01")) return "B";
  if (icon.startsWith("02")) return "H";
  if (icon.startsWith("03")) return "N";
  if (icon.startsWith("04")) return "Y";
  if (icon.startsWith("09")) return "R";
  if (icon.startsWith("10")) return "R";
  if (icon.startsWith("11")) return "Z";
  if (icon.startsWith("13")) return "W";
  if (icon.startsWith("50")) return "M";
}
