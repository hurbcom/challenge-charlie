export const convert = (temperature, type) => {
    if(type) {
        return `${(temperature - 273).toFixed()} ºC`
    } else {
        return `${(1.8 * (temperature - 273) + 32).toFixed()} F`
    }
}