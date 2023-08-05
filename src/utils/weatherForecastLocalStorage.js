import formattedCurrentDate from './formattedCurrentDate';

export const getForecastLocalStorage = (formattedCity) => {
  const formattedDate = formattedCurrentDate();

  const getLocalStorageDate = localStorage.getItem(`${formattedDate}-${formattedCity}`);
  return getLocalStorageDate;
};

export const saveForeCastLocalStorage = (formattedCity, forecast) => {
  const formattedDate = formattedCurrentDate();
  const forecastFormatted = JSON.stringify(forecast);
  localStorage.setItem(`${formattedDate}-${formattedCity}`, forecastFormatted);
};

export const deleteForeCastLocalStorage = () => {
  const localStorageKeys = getLocalStorageKeysForecast();
  localStorageKeys.forEach((element) => {
    localStorage.removeItem(element);
  });
};

const getLocalStorageKeysForecast = () => {
  let keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const foreCastKey = parseInt(key);
    if (!!foreCastKey && foreCastKey !== parseInt(formattedCurrentDate())) {
      keys.push(localStorage.key(i));
    }
  }
  return keys;
};
