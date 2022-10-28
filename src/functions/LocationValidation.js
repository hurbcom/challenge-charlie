export const isCity = (input) => {
  let RegexArray = input.match(/^[a-zA-Zà-úÀ-Ú.\s_-]+$/);
  return Array.isArray(RegexArray);
};

/* 
    retorna false caso as coordenadas não sejam válidas
    caso as coordenadas sejam válidas, retorne um array contendo latitude e longitude
  */
export const validCoordinates = (input) => {
  const separetedByComma = input.indexOf(",") !== -1;
  const separatedBySpace = input.indexOf(" ") !== -1;
  if (!separetedByComma && !separatedBySpace) return false;
  let coordinates = [];
  if (separetedByComma) {
    let cleanCoordinate = input.replace(/ /g, "");
    coordinates = cleanCoordinate.split(",");
  } else {
    coordinates = input.split(" ");
  }
  if (!validLatLon(Number(coordinates[0]), Number(coordinates[1])))
    return false;
  return coordinates;
};

const validLatLon = (lat, lon) => {
  return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
};
