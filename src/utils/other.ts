/** RGB color values */
export interface Rgb {
    r: number;
    g: number;
    b: number;
}

/** Determines color based on temperature */
export const getColorForTemperature = (temp: number): Rgb => {
    let color: Rgb;
    if (temp <= 15) {
        color = { r: 13, g: 71, b: 161 }; // Azul para temperaturas frias
    } else if (temp > 15 && temp <= 20) {
        color = { r: 255, g: 238, b: 88 }; // Amarelo escuro para temperaturas amenas
    } else if (temp > 20 && temp <= 25) {
        color = { r: 255, g: 214, b: 0 }; // Amarelo médio para temperaturas médias
    } else if (temp > 25 && temp <= 30) {
        color = { r: 255, g: 202, b: 40 }; // Amarelo claro para temperaturas quentes
    } else if (temp > 30 && temp <= 35) {
        color = { r: 255, g: 152, b: 0 }; // Laranja para temperaturas muito quentes
    } else {
        color = { r: 244, g: 67, b: 54 }; // Vermelho para temperaturas extremamente quentes
    }

    return color;
};

/** Get tomorrow's date from given date */
export function increaseDay(todaysDate: Date): Date {
    let tomorrowsDate = new Date(todaysDate.getTime());

    tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);

    return tomorrowsDate;
}

/** Round temperature number to nearest integer */
export function roundToInteger(value: number): number {
    return Math.round(value);
}

/** Convert Celsius to Fahrenheit if needed */
export const convertTemperature = (
    temp: number,
    isCelsius: boolean
): number => {
    return isCelsius ? temp : (temp * 9) / 5 + 32;
};
