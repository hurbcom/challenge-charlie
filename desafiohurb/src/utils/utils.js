
// Converte fahrenheit em celsius
export function toCelsius(fahrenheit) {
    return (5 * (fahrenheit - 32)) / 9;
}

// Converte celsius em fahrenheit
export function toFahrenheit(celsius) {
    return (celsius / 5) * 9 + 32;
}

export function loadPosition() {
    return new Promise(function (resolve) {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords);
            }, function (error) {
                resolve({});
            });
        } else {
            resolve({});
        }
    });
}