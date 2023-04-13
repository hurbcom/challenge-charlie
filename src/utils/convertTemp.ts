export default function fahrenheitToCelsius(tempF: number): number {
    const tempC = (tempF - 32) * 5 / 9;
    return parseInt(tempC.toFixed());
}