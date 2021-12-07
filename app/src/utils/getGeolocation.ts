const getGeolocation = (setPosition: Function, setSubmit: Function) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const {
        coords: { latitude, longitude },
      } = position;
      setPosition({
        latitude,
        longitude,
      });
      setSubmit();
    });
  }
};
export default getGeolocation;
