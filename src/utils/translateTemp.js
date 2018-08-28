/**
 * Convert Celsius to Fahrenheit and return the name of the style to decorate
 * layout.
 * @param {number} 10
 * @param {string} c
 * @example
 *  translate(10, 'c')
 * @returns {string} The name of the style to decorate layout..
 */
const translateTemp = (temp, unit) => {
    switch (true) {
        case toCelsius(temp, unit) < 16:
            return 'cold';

        case toCelsius(temp, unit) < 36:
            return 'tropical';

        case toCelsius(temp, unit) > 35:
            return 'hot';

        default:
            return;
    }
};

/**
 * Support function to convert Fahrenheit to Celsius.
 * @param {number} 10
 * @param {string} c
 * @example
 *  toCelsius(10, 'f')
 * @returns {number} The temperature in Celsius
 */
function toCelsius(temp, unit) {
    if (unit === 'c') {
        return temp;
    } else if (unit === 'f') {
        return (5 / 9) * (temp - 32);
    }

    return;
}

export default translateTemp;
