export const degreeToDirection = (degree) => {
    const directions = [
        'Norte',
        'Nordeste',
        'Leste',
        'Sudeste',
        'Sul',
        'Sudoeste',
        'Oeste',
        'Noroeste',
    ];

    degree += 22.5;

    if (degree < 0)
        degree = 360 - Math.abs(degree) % 360;
    else
        degree = degree % 360;

    const position = parseInt(degree / 45);
    return `${directions[position]}`;
};

export const metersPerSecondToKilometerPerHour = (speed) => {
    return Math.round(speed * 3.6);
};

export const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
};

export const kelvinToFahrenheit = (kelvin) => {
    return (((kelvin - 273.15) * 1.8) + 32).toFixed(1);
};