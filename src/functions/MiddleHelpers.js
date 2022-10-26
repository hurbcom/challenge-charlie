export const showCityInformation = (information) => {
  let locationInformation = [];
  if (information) {
    if (information.city) {
      locationInformation.push(information.city);
    }
    if (information.state) {
      locationInformation.push(information.state);
    }
    if (information.country_code) {
      locationInformation.push(information.country_code);
    }
  }
  return locationInformation.join(", ");
};

export const ChangeColor = (temp) => {
  if (temp > 35) {
    return "#AA2429";
  } else if (temp < 15) {
    return "#0954A5";
  } else {
    return "#F0C000";
  }
};
