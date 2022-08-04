export const tempConvertToCelsius = (temp: number) => {
    return Math.round((temp - 273.15) * 100) / 100;
};

export const tempConvertToFahrenheit = (temp: number) => {
    return Math.round(((temp * 9) / 5 - 459.67) * 100) / 100;
};
