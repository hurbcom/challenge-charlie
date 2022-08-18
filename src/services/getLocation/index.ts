export type LocationReturn = {
  latitude: number;
  longitude: number;
};

export const isGeolocationAllowedOrAbleToAsk = async () => {
  if (!window?.navigator?.permissions) return Promise.reject(false);

  const permission = await window.navigator.permissions.query({
    name: 'geolocation',
  });

  return permission.state === 'granted' || permission.state === 'prompt';
};

export const getLocation = () =>
  new Promise((resolve, reject) => {
    if (!window?.navigator?.geolocation) return reject(false);

    return window.navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
    );
  });

export default { getLocation, isGeolocationAllowedOrAbleToAsk };
