export const formatTemperature = (temp:number,unitMeasurement:string) => {
    return `${Math.floor(temp)}°${unitMeasurement}`
}