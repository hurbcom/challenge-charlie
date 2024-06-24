// Function to convert Kelvin to Fahrenheit
export function convertKelvinToCelsius(kelvin: number): number {
    const celsius = kelvin - 273.15;
    return parseFloat(celsius.toFixed(0));
}

// Function to convert Kelvin to Celsius
export function convertKelvinToFahrenheit(kelvin: number): number {
    const fahrenheit = (kelvin * 9 / 5) - 459.67;
    return parseFloat(fahrenheit.toFixed(0));
}

// Function to convert meters per second to kilometers per hour
export function convertMeterPerSecondToKilometerPerHour(metersPerSecond: number): number {
    const kilometersPerHour = metersPerSecond * 3.6;
    return parseFloat(kilometersPerHour.toFixed(1));
}

// Function to convert meteorological angle to cardinal coordinates
export function convertAngleToCardinalDirections(angle: number): string {
    const directions = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO']
    const maxRange = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

    for (let i = 0; i < maxRange.length; i++) {
        if (angle < maxRange[i]) {
            return directions[i];
        }
    }

    //this will garantee that angles between 337,5 and 360 (included) will be pointed to north
    return 'N'
}