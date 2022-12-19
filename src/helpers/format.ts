export const formattedCityName = (data: any): string => {
    return `${data.name}, ${data.state} - ${data.country}`
}

export const formattedDegreesCelsius = (temp: number): string => {
    return `${Math.round(temp)}º`
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