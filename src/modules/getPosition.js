/**
 * @param {PositionOptions} options
 * @returns {Promise<Position>}
 */
export function getPosition(options) {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}
