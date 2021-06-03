export const getCurrentPosition = () =>
  // eslint-disable-next-line no-undef
  new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      },
    );
  });
