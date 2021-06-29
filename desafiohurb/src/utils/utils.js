
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

export function verifyTemperature(temperature, isCelsius) {

    let temp = temperature;

    if (!isCelsius) {
        temp = toCelsius(temp);
    }

    if (temp === undefined) {
        return "background-none";
    }

    if (temp < 5) {
        return `background-5`;
    }

    if (temp > 40) {
        return `background-40`;
    }

    const roundedTemperature = Math.ceil(temp / 5) * 5;

    return `background-${roundedTemperature}`;

}



