export function getWindDirection(deg) {
    console.log(deg);
    const val = Math.floor((deg / 22.5) + 0.5);
    const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'];
    return arr[(val % 16)];
}

export function formatWeatherDescription(desc) {
    return desc.charAt(0).toUpperCase() + desc.slice(1);
}

export function getWeatherColors(celsiusTemperature) {
    const yellow = [
        'rgba(255, 202, 40, 0.85)',
        'rgba(255, 213, 79, 0.85)',
        'rgba(255, 193, 7, 0.85)',
    ];
    const blue = [
        'rgba(41, 182, 246, 0.85)',
        'rgba(79, 195, 247, 0.85)',
        'rgba(41, 182, 246, 0.85)',
    ];
    const red = [
        'rgba(239, 83, 80, 0.85)',
        'rgba(229, 115, 115, 0.85)',
        'rgba(244, 67, 54, 0.85)',
    ];
    const white = [
        'rgba(189, 189, 189, 0.85)',
        'rgba(224, 224, 224, 0.85)',
        'rgba(158, 158, 158, 0.85)',
    ];
    if (celsiusTemperature == null) return white;
    if (celsiusTemperature < 15) return blue;
    if (celsiusTemperature > 35) return red;
    return yellow;
}
