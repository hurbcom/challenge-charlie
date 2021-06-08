export function celsiusForFahrenheit(temp: number) {
    const celsius = (temp - 32) / 1.8;
    return celsius;
}

export function fahrenheitForCelsius(temp: number) {
    const celsius = (temp * 1.8) / +32;
    return celsius;
}
