const getGeolocation = (setPosition: Function) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition(position);
    });
  }
};
export default getGeolocation;
