export const getWindSpeedInKilometers = (speed:number) => {
    const val = Math.floor(speed * 3.6);
    return val;
}