/**
 * Get current location coordinates from Geolocation browser API.
 * @param {function} function(){...}
 * @example
 *  showPosition(position) {
        const params = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
        };

        console.log(params);
    }

    geolocation(showPosition)
 * @returns {object} A object with latitude and longitude from the browser's current location.
 */
const geolocation = fnShowPos => {
    navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(fnShowPos)
        : console.log(
              'Geolocation is not supported by this browser.'
          );
};

export default geolocation;
