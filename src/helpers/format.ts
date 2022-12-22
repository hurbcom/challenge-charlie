export const formattedCityName = (data: any): string => {
    const state = data.state ? `, ${data.state}` : '';
    return `${data.name}${state} - ${data.country}`
}

export const formattedDegrees = (temp: number, isFahrenheit: boolean): string => {
    return isFahrenheit ? `${convertToFahrenheit(temp)}ºF` : `${Math.round(temp)}ºC`
}

export const formattedUppercase = (word: string): string => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
}

export const formattedWindSpeed = (value: number): string => {
    return `${(value * 3.6).toFixed(1)} Km/h`;
}
export const formattedUmidity = (value: number): string => {
    return `${value.toFixed(0)}%`;
}
export const formattedPressure = (value: number): string => {
    return `${value.toFixed(0)} hPa`;
}

const convertToFahrenheit = (temp: number): number => {
    return Math.round((temp * 9) / 5 + 32);
};