/**
 * Transforms value in celcius to fahrenheit
 * @param celsius value in celcius
 * @returns value in fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32
}
