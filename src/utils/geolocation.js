const geolocation = fnShowPos => {
    navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(fnShowPos)
        : console.log(
              'Geolocation is not supported by this browser.'
          );
};

export default geolocation;
