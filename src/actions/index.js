const apiURL = 'http://localhost:3000/api';

/**
 * Get the weather forecast from API, passing coordinates.
 * @param {object} {lat: -22.7741062, long: -43.3031759}
 * @example
 * const params = {
 *      lat: -22.7741062
 *      long:-43.3031759
 * }
 * @returns {promise} A Promise to be resolved where you ara call this.
 */
export const coordinates = params => {
    const url = `${apiURL}/coordinates?lat=${params.lat}&long=${
        params.long
    }`;
    return fetch(url).then(res => res.json());
};

/**
 * Get the weather forecast from API, passing the city's name and the unit of
 * the weather forecast.
 * @param {object} {location: 'Rio de Janeiro', unit: 'c'}
 * @example
 * const params = {
 *      location: 'Rio de Janeiro',
 *      unit: 'c'
 * }
 * @returns {promise} A Promise to be resolved where you ara call this.
 */
export const weather = params => {
    const url = `${apiURL}/wheater?location=${params.location}&unit=${
        params.unit
    }`;
    return fetch(url).then(res => res.json());
};
