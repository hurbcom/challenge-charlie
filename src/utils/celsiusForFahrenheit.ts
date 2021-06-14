export function celsiusForFahrenheit(temp: number) {
    const celsius = Math.round(temp * 1.8 + 32);
    return celsius;
}
