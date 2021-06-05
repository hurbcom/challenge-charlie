export const getIconByWeatherId = (id: number | undefined) => {
  const fallbackIcon = require('../assets/icons/13.svg');
  if (!id) return fallbackIcon;
  if (id >= 200 && id < 300) {
    return require('../assets/icons/27.svg');
  }
  if (id >= 300 && id < 400) {
    return require('../assets/icons/17.svg');
  }
  if (id >= 500 && id < 600) {
    return require('../assets/icons/18.svg');
  }
  if (id >= 600 && id < 700) {
    return require('../assets/icons/22.svg');
  }
  if (id >= 801 && id < 900) {
    return require('../assets/icons/8.svg');
  }
  if (id === 800) {
    return require('../assets/icons/2.svg');
  }
  return fallbackIcon;
};
